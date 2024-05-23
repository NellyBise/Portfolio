export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({ message: 'You win' })
  } else {
    res.status(500).json({ message: 'Method not allowed' })
  }
}
