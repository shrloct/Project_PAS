var express = require('express')
const { loginGuru } = require('../controllers/guru')
const router = express.Router()

router.post('/login', loginGuru)

module.exports = router