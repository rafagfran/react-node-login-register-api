const express = require('express')
const connection = require('./config/db.js')
const routes = require('./routes/routes.js')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())
app.use(routes)



// USER REGISTRATION
app.post('/register', async (req, res) => {
   
   const { user, password } = req.body

   console.log(user, password)

   try{
      const results = await new Promise((resolve, reject) =>{
         connection.query('INSERT INTO users(username, password) VALUES(?, ?)', [user, password], (error, result) => {
            if(error){
               reject(error)
            }else{
               resolve(result)
               
            }
         })
      })
      
      if(results.affectedRows > 0){
         res.status(200).json("registred")
         console.log(results.affectedRows)
      }else{
         res.status(200).json("Error in register: affected rows: ", results.affectedRows)
      }

      

   }catch(error){
      res.status(400).json(error)
   }
})
module.exports = app
