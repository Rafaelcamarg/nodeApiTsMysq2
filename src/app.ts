const express = require('express')

const app = express()


app.use(express.json())

import cartRouter from "./routes/cartRouter"
import clientRouter from "./routes/clientRouter"
import productRouter from "./routes/productsRouter"

app.use('/api/', clientRouter)
app.use('/api/', productRouter)
app.use('/api/', cartRouter)

export default app