const express = require('express')

const app = express()


app.use(express.json())

import clientRouter from "./routes/clientRouter"

app.use('/api/', clientRouter)

export default app