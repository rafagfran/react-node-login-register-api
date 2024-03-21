const app = require('./app.js')

dotenv = require('dotenv').config()

const port = process.env.PORT

app.listen(port, () => {
    console.log(`Server Listening on port  ${port}`)
})