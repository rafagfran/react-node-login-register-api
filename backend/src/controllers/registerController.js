const userModel = require('../models/userModel.js')

const registreUser = async (req, res) => {
    const { name, email, password } = req.body
    try
    {
        await userModel.registreUser(name, email, password)

        res.status(200).json('Successfully registred')

    }catch(error){
        res.status(400).json('Not registred')
    }
}

module.exports = {registreUser}