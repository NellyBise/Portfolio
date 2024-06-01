import nodemailer from 'nodemailer'
import rateLimit from 'express-rate-limit'

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
  message: 'Too many requests from this IP, please try again later',
})

export default async function handler(req, res) {
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
        subject: `Website activity from ${email}`,
        html: `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>
      `,
      })

      return res.status(200).json({ message: 'Success: email was sent' })
    } catch (error) {
      console.log(error)
      return res.status(500).json({ message: 'COULD NOT SEND MESSAGE' })
    }
  })
}
