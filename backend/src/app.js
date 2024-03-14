import express from 'express'
import routes from './Routes.js'

const app = express()
app.use(express.json())// indicar para o express ler body com JSON

app.use(routes)

export default app
