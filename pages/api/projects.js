import clientPromise from '@/lib/mongodb'
/*import multer from 'multer'

const storage = multer.diskStorage({
  destination: 'public/projects/',
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
})
const upload = multer({ storage })

export const config = {
  api: {
    bodyParser: false,
  },
}*/

export default async function handler(req, res) {
  try {
    const client = await clientPromise
    const collection = client.db('Portfolio').collection('projects')

    switch (req.method) {
      case 'GET':
        const projects = await collection.find().toArray()
        res.status(200).json(projects)
        break
      /*case 'POST':
        upload.any()(req, res, async (error) => {
          if (error) {
            return res.status(400).json({ error: error.message })
          }
          const { name, mission, link, github, techno } = req.body
          const coverFile = req.files
            ? req.files.find((file) => file.fieldname === 'cover')
            : null
          const imageFiles = req.files
            ? req.files.filter((file) => file.fieldname === 'img')
            : []
          const cover =
            coverFile && coverFile.path
              ? coverFile.path.replace(/\\/g, '/').replace('public/', '/')
              : null
          const images =
            imageFiles.length > 0
              ? imageFiles.map((file) =>
                  file.path.replace(/\\/g, '/').replace('public/', '/')
                )
              : []
          const technologies = techno.split(',').map((tech) => tech.trim())
          const weblink = link !== 'undefined' ? link : ''
          const webgithub = github !== 'undefined' ? github : ''
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
        break*/
      default:
        res.setHeader('Allow', ['GET'])
        res.status(405).end(`Method ${req.method} Not Allowed`)
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}
