import clientPromise from '@/lib/mongodb'
import jwt from 'jsonwebtoken'
import Cookies from 'js-cookie'

const secret = process.env.JWT_SECRET

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body

    try {
      const client = await clientPromise
      const db = client.db('Portfolio')
      const user = await db.collection('user').findOne({ email })

      if (user && user.password === password) {
        const token = jwt.sign({ userId: user._id }, secret, {
          expiresIn: '1h',
        })
        Cookies.set('token', token)
        res.status(200).json({ token })
      } else {
        res.status(401).json({ message: 'Email ou mot de passe incorrect' })
      }
    } catch (error) {
      console.error("Erreur lors de l'authentification", error)
      res.status(500).json({ message: 'Erreur interne du serveur' })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Méthode non autorisée`)
  }
}
