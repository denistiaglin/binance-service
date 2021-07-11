import express from 'express'
import {config} from 'dotenv'

config()

import apiRouter from './api'
import {connection} from './lib/database/mongoConnect'

const app = express()

app.use(express.json())

app.use('/api', apiRouter)

connection.then(() => {
        console.log('Connected to database')

        const PORT = process.env.PORT

        app.listen(PORT, () => {
            console.log(`Server started on ${PORT} to ` + process.env.NODE_ENV)
        })
    }
).catch((err) => {
    console.log(err)
})
