import clientPromise from '@/lib/mongodb'

export default async function handler(req, res) {
  try {
    const client = await clientPromise
    const collection = client.db('Portfolio').collection('projects')

    switch (req.method) {
      case 'GET':
        const projects = await collection.find().toArray()
        res.status(200).json(projects)
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
