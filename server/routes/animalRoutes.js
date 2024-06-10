const {Router} = require('express');
const {authUser, checkUser} = require('../middlewere/authMiddlewere');
const {sendAnimalArray, addAnimal, showAnimalData, showimage} = require('../controllers/animalController')
const {uploadProfile} = require('../multer-config');

const router = Router();

router.get('/', checkUser, sendAnimalArray);
router.post('/add', checkUser, uploadProfile.single('photo'), addAnimal);
router.get('/showimage/:img', checkUser, showimage);
router.get("/show/:id", checkUser, showAnimalData);

module.exports = router;
