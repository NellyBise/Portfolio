import clientPromise from '@/lib/mongodb'

export default async function handler(req, res) {
  try {
    const client = await clientPromise
    const db = client.db('Portfolio')

    switch (req.method) {
      case 'POST':
        const techSkill = req.body
        await db.collection('techSkills').insertOne(techSkill)
        res.status(201).json({ message: 'Tech skill added successfully' })
        break
      case 'GET':
        const techSkills = await db.collection('techSkills').find({}).toArray()
        res.status(200).json(techSkills)
        break
      default:
        res.setHeader('Allow', ['GET', 'POST'])
        res.status(405).end(`Method ${req.method} Not Allowed`)
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}
