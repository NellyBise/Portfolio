import clientPromise from '@/lib/mongodb'

export default async function handler(req, res) {
  try {
    const client = await clientPromise
    const db = client.db('Portfolio')

    switch (req.method) {
      case 'GET':
        const toolSkills = await db.collection('toolSkills').find({}).toArray()
        res.status(200).json(toolSkills)
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
