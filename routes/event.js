const express = require('express')
const { addEvent } = require('../controllers/event')
const router = express.Router()


router.post('/create', addEvent);


module.exports = router
