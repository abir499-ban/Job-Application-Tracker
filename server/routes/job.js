const express = require('express');
const { createJob } = require('../controller/job');
const router = express.Router();



router.post('/', createJob);

module.exports = router