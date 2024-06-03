import clientPromise from '@/lib/mongodb'
import { ObjectId } from 'mongodb'

export default async function handler(req, res) {
  try {
    const client = await clientPromise
    const collection = client.db('Portfolio').collection('projects')

    switch (req.method) {
      case 'GET':
        const { id } = req.query
        if (!ObjectId.isValid(id)) {
          res.status(400).json({ message: 'Invalid project ID' })
          return
        }

        const project = await collection.findOne({ _id: new ObjectId(id) })
        if (!project) {
          res.status(404).json({ message: 'Project not found' })
          return
        }

        res.status(200).json(project)
        break
      default:
        res.setHeader('Allow', ['GET'])
        res.status(405).end(`Method ${req.method} Not Allowed`)
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}
