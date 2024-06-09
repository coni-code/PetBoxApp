const {Router} = require('express');
const {checkUser} = require('../middlewere/authMiddlewere');
const {addEvent, showEvents, deleteEvent } = require('../controllers/eventController');

const router = Router();

router.get("/show/:animal", checkUser, showEvents);
router.post('/add', checkUser, addEvent);
router.post('/delete', checkUser, deleteEvent);

module.exports = router;
