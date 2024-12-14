const express = require('express');
const { createJob, getAlljobs, findJob,updateJob, fetchJobByStatus } = require('../controller/job');
const router = express.Router();


router.get('/', (req, res) => {
    console.log("dum dum");
    return res.status(201).json({ message: "All done", success: true })
})
router.get('/alljobs', getAlljobs);

router.post('/', createJob);

router.get('/:id', findJob)

router.patch('/:id' , updateJob)

router.get('/filterjobs/:status', fetchJobByStatus);

module.exports = router