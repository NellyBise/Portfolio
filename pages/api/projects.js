import clientPromise from '@/lib/mongodb'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, mission, techno, link, github, cover, img } = req.body

    try {
      const client = await clientPromise
      const db = client.db('Portfolio')

      const projectData = {
        name,
        mission,
        cover,
        img,
      }
      if (link) projectData.link = link
      if (github) projectData.github = github
      if (techno) projectData.techno = techno.split(',').map((t) => t.trim())
      const result = await db.collection('projects').insertOne(projectData)
      res
        .status(200)
        .json({ message: 'Projet ajouté', insertedId: result.insertedId })
    } catch (error) {
      console.error("Erreur lors de l'insertion du projet", error)
      res.status(500).json({ message: 'Erreur interne du serveur' })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Méthode ${req.method} non autorisée`)
  }
}
