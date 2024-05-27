import clientPromise from '@/lib/mongodb'

export default async function handler(req, res) {
  switch (req.method) {
    case 'POST':
      const { email, password, action } = req.body

      try {
        const client = await clientPromise
        const db = client.db('Portfolio')
        const user = await db.collection('user').findOne({ email })

        if (action === 'login') {
          if (user && user.password === password) {
            const session = { userId: user._id, email: user.email }
            res.setHeader(
              'Set-Cookie',
              `session=${JSON.stringify(
                session
              )}; HttpOnly; Path=/; Max-Age=3600`
            )
            res.status(200).json({ message: 'Connecté avec succès' })
          } else {
            res.status(401).json({ message: 'Email ou mot de passe incorrect' })
          }
        } else if (action === 'logout') {
          res.setHeader('Set-Cookie', 'session=; HttpOnly; Path=/; Max-Age=0')
          res.status(200).json({ message: 'Déconnecté avec succès' })
        } else {
          res.status(400).json({ message: 'Action non valide' })
        }
      } catch (error) {
        console.error("Erreur lors de l'authentification", error)
        res.status(500).json({ message: 'Erreur interne du serveur' })
      }
    default:
      res.setHeader('Allow', ['POST'])
      res.status(405).end(`Méthode non autorisée`)
  }
}
