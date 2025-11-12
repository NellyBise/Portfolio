import nodemailer from 'nodemailer'
import rateLimit from 'express-rate-limit'

function getClientIp(req) {
  const forwardedIpsStr = req.headers['x-forwarded-for']
  if (forwardedIpsStr) {
    const forwardedIps = forwardedIpsStr.split(',')
    const clientIp = forwardedIps[0].trim().split(' ').pop()
    return clientIp
  }
  return req.connection.remoteAddress || req.socket.remoteAddress
}

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
  message: 'Too many requests from this IP, please try again later',
  keyGenerator: (req) => {
    return getClientIp(req)
  },
})

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://nelly-bise.fr')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  limiter(req, res, async () => {
    if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Method Not Allowed' })
    }

    const username = process.env.NEXT_PUBLIC_EMAIL_USERNAME
    const password = process.env.NEXT_PUBLIC_EMAIL_PASSWORD
    const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL

    console.log('dealing with request')

    let formData
    try {
      formData = req.body
    } catch (error) {
      return res.status(400).json({ message: 'Invalid JSON' })
    }

    const { name, email, message } = formData

    const transporter = nodemailer.createTransport({
      host: 'smtp.free.fr',
      port: 587,
      secure: false,
      auth: {
        user: username,
        pass: password,
      },
    })

    try {
      await transporter.sendMail({
        from: username,
        to: myEmail,
        replyTo: email,
        subject: `Mail de ${email} depuis mon portfolio`,
        html: `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>
      `,
      })

      return res
        .status(200)
        .json({ message: 'Votre message a bien été envoyé.' })
    } catch (error) {
      console.log(error)
      return res
        .status(500)
        .json({ message: "Erreur: votre message n'a pas pu être envoyé." })
    }
  })
}
