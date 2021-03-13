const express = require('express');
const authController = require('../controllers/auth')

const router = express.Router();

router.post('/register', authController.register );

router.post('/cadastrov', authController.cadastrov );

router.get('/iniciacadastrov', authController.cadastrov );

router.post('/login', authController.login );


module.exports = router;