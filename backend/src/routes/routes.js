const express = require('express')

const router = express.Router()

const loginController = require('.././controllers/loginController.js')

router.get('/users', loginController.allUsers)
router.post('/login', loginController.validateLogin)


module.exports= router
