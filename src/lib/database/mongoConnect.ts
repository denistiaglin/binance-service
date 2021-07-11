import { createConnection } from 'mongoose'

export const connection = createConnection(process.env.MONGO_URL || '', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
})
