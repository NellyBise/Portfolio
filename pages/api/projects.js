import clientPromise from '@/lib/mongodb'
import multer from 'multer'

const storage = multer.diskStorage({
  destination: './app/src/projects/',
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
})
const upload = multer({ storage })

export const config = {
  api: {
    bodyParser: false,
  },
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  // Handle file upload using Multer
  upload.any()(req, res, async (error) => {
    if (error) {
      return res.status(400).json({ error: error.message })
    }
    const { name, mission, link, github, techno } = req.body
    const cover =
      req.files.find((file) => file.fieldname === 'cover')?.path || null
    const images =
      req.files
        .filter((file) => file.fieldname === 'img')
        .map((file) => file.path) || []
    const technologies = techno.split(',').map((tech) => tech.trim())
    const weblink = link !== 'undefined' ? link : ''
    const webgithub = github !== 'undefined' ? github : ''

    const client = await clientPromise
    const collection = client.db('Portfolio').collection('projects')

    const newProject = {
      name,
      mission,
      link: weblink,
      github: webgithub,
      techno: technologies,
      cover,
      images,
    }

    const result = await collection.insertOne(newProject)
    res.status(201).json({ id: result.insertedId, ...newProject })
  })
}
