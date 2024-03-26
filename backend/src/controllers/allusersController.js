const userModel = require('../models/userModel.js')

// GET ALL USERS LIST
const allUsers = async (req, res) => {
    try{
       const result =  await userModel.allUsers()
    
       res.status(200).json(result)
    }catch(error){
       res.status(400).json(result)
    }
 }

 module.exports = {allUsers}
