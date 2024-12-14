const express = require('express');
const { createJob, getAlljobs } = require('../controller/job');
const JobsModel = require('../model/job');
const router = express.Router();


router.get('/', (req, res) => {
    console.log("dum dum");
    return res.status(201).json({ message: "All done", success: true })
})
router.get('/alljobs', getAlljobs);

router.post('/', createJob);

router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) return res.status(400).json({ message: "Invalid GET request", success: false })

        const job = await JobsModel.findById(id);
        if (!job) return res.status(400).json({ message: "No such job registered", success: false })


        return res.status(201).json({ message: job, success: true });
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error", success: false });
    }
})

module.exports = router