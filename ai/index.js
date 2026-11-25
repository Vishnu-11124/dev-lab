import express from 'express'
import 'dotenv/config'

const app = express()

const port = 5000

app.get('/', (req, res) => res.json({ message: " Welcome to AI server"}))

app.listen(port, () => console.log(`server running on http://localhost:${port}`))