const express = require('express')
const connection = require('./config/db.js')
const routes = require('./routes/routes.js')

const app = express()
app.use(express.json())

app.use(routes)


// VALIDATE LOGIN
app.post('/login', async (req, res) => {
   try{
      const { user, password } = req.body
      const results = await new Promise((resolve, reject) => {
         connection.query('SELECT COUNT(*) AS count FROM users WHERE username = ? AND password = ?', [user, password], (error, result) => {
            if (error) {
               reject(error);
            } else {
               resolve(result);
            }
         }) 
      })
      
      const count = results[0].count

      if(count === 1 ){
         res.status(200).json('You are logged')
      }else{
         res.status(401).json('Invalid Credentials')
      }

   }catch(error){
      res.status(400).json('Erro', error)
   }
})

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
