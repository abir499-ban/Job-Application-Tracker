const {Router}  = require('express')
const router = Router();
const {createUser, handlelogin}  = require('../controller/user')


router.post('/', createUser);
router.post('/login', handlelogin);


module.exports = router