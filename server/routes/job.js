const express = require('express');
const { createJob, getAlljobs, findJob, updateJob, fetchJobByStatus } = require('../controller/job');
const JobsModel = require('../model/job');
const router = express.Router();


router.get('/', (req, res) => {
    console.log("dum dum");
    return res.status(201).json({ message: "All done", success: true })
})
router.get('/alljobs', getAlljobs);

router.post('/', createJob);

router.get('/:id', findJob)

router.patch('/:id', updateJob)

router.get('/filterjobs/:status', fetchJobByStatus);

router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        if (!id)
            return res.status(401).json({ message: "No job id", success: false })
        const job = await JobsModel.findByIdAndDelete(id);
        if (!job)
            return res.status(401).json({ message: "No such job", success: false })


        await JobsModel.findByIdAndDelete(id);
        return res.status(200).json({ message: "Successfull Job Deletion", success: true })
    } catch (error) {
        return res.status(500).json({ message: "Internal Server error", success: false })
    }
})


module.exports = router