var express = require('express');
const { registerGuru, getDataGuru, loginGuru } = require('../controllers/guru');
const router = express.Router();

router.get('/', getDataGuru);
router.post('/create', registerGuru);
router.post('/login', loginGuru);

module.exports = router