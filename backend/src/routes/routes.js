const express = require('express')

const router = express.Router()

const allUsersController = require('../controllers/allusersController.js')
const loginController = require('../controllers/loginController.js')
const registreController = require('../controllers/registerController.js')

router.get('/users', allUsersController.allUsers)
router.post('/login', loginController.validateLogin)
router.post('/register', registreController.registreUser)

module.exports= router
