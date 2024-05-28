import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI
const options = { useUnifiedTopology: true, useNewUrlParser: true }

let client
let clientPromise

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your MongoDB URI to .env.local')
}

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable so the connection is not recreated
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options)
    global._mongoClientPromise = client.connect()
  }
  clientPromise = global._mongoClientPromise
} else {
  // In production mode, it's best to not use a global variable
  client = new MongoClient(uri, options)
  clientPromise = client.connect()
}

export default clientPromise
