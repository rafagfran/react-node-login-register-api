const express = require('express')

const router = express.Router()

const loginController = require('.././controllers/loginController.js')

router.get('/users', loginController.allUsers)

module.exports= router
