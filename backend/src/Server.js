const app = require('./app.js')

dotenv = require('dotenv').config()

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server Listening on port  ${PORT}`)
})
