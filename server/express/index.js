require('dotenv').config()
import express from 'express'

const app = express()

app.listen(process.env.EXPRESS_PORT, () => console.log(`Server started at http://127.0.0.1:${process.env.EXPRESS_PORT}`))
