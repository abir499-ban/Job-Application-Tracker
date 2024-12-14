const {Router}  = require('express')
const router = Router();
const {createUser}  = require('../controller/user')


router.post('/', createUser);


module.exports = router