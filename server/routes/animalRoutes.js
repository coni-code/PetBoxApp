const {Router} = require('express');
const {checkUser} = require('../middlewere/authMiddlewere');
const {sendAnimalArray, addAnimal, uploadImage, showimage} = require('../controllers/animalController')
const {uploadProfile} = require('../multer-config');

const router = Router();

router.get('/', checkUser, sendAnimalArray);
router.post('/add', checkUser, uploadProfile.single('photo'), addAnimal);
router.get('/showimage/:img', checkUser, showimage);

module.exports = router;
