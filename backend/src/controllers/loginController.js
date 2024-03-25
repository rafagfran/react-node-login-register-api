const userModel = require('.././models/userModel.js')

// GET ALL USERS LIST
const allUsers = async (req, res) => {
    try{
       const result =  await userModel.allUsers()
    
       res.status(200).json(result)
    }catch(error){
       res.status(400).json(result)
    }
 }

 const validateLogin = async(req, res) => {
   const { email, password } = req.body;
   try{
      const result = await userModel.validateLogin(email, password)

      if(result === 1 ){
         res.status(200).json('You are logged')
      }else{
         res.status(401).json('Invalid Credentials')
      }
   
   }catch(error){
      res.status(400).json('Not registred')
   }
 }

 module.exports = {
   allUsers,
   validateLogin
 }
 