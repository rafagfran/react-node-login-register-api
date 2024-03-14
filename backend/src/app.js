import express from 'express'
import routes from './Routes.js'
import cors from 'cors'

const app = express()
app.use(express.json())// indicar para o express ler body com JSON

app.use(cors())

app.use(routes)

export default app
