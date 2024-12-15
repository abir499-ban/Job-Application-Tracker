const {Router}  = require('express')
const router = Router();
const {createUser, handlelogin, VerifyUser}  = require('../controller/user')


router.post('/', createUser);
router.post('/login', handlelogin);
router.get('/verify/:token', VerifyUser);


module.exports = router