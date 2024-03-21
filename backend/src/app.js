const express = require('express')
const connection = require('./database.js')

const app = express()
app.use(express.json())

// GET ALL USERS LIST
app.get('/users', async(req, res) => {
   try{
      const results = await new Promise((resolve,reject) => {
         connection.query('SELECT * FROM users', (error, result) => {
            if (error){
               reject(error)
            }else{
               resolve(result)
            }
         })
      })
   
      res.status(200).json(results)
   }catch(error){
      res.status(400).json(results)
   }
   
   
})

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

module.exports = app
