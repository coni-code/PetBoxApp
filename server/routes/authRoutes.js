const {Router} = require('express');
const {signup, login, logout, status} = require('../controllers/authControllers');
const {checkUser} = require('../middlewere/authMiddlewere');
const router = Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/logout', logout);
router.get('/status', checkUser, status);

module.exports = router;
