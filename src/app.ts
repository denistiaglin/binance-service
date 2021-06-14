import express from 'express'
import {json} from 'body-parser'
import mongoose from 'mongoose'
import { config } from 'dotenv'

import apiRouter from './api'

config()

const app = express()

app.use(json())

app.use('/api', apiRouter)

mongoose.connect(
    process.env.MONGO_URL || '',
    {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err) => {
        if (err) {
            return console.log(err)
        }

        console.log(process.env.NODE_ENV)
        console.log('Connected to database')

        const PORT = process.env.PORT

        app.listen(PORT, () => {
            console.log(`Server started on ${PORT}`)
        })
    }
)
