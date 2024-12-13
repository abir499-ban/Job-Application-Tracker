const express = require('express');
const { createJob,getAlljobs } = require('../controller/job');
const router = express.Router();


router.get('/', (req, res)=>{
    console.log("dum dum");
    return res.status(201).json({message : "All done", success : true})
})
router.get('/alljobs', getAlljobs);
router.post('/', createJob);

module.exports = router