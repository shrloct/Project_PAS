var express = require('express')
const { registerGuru, getDataGuru } = require('../controllers/guru')
const router = express.Router()

router.get('/', getDataGuru)
router.post('/create', registerGuru)

module.exports = router