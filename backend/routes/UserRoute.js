const { createUser, loginUser } = require('../controllers/UserController');
const fileUploader = require('../middlewares/FileUploader');

const router = require('express').Router();

router.post('/create-user',fileUploader.single('ProfileImage'),createUser);
router.post('/login',loginUser);

module.exports = router;