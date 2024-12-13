const JobsModel = require("../model/job");

async function createJob(req, res) {
    try {
        const { jobTitle, companyName, notes } = req.body;


        //validating feilds
        if (!jobTitle || !companyName || !notes) {
            return res.status(401).json({ message: "Incomplete Details", success: false })
        }

        //creating JOB APPLICATION

        const job = await JobsModel.create({
            jobTitle: jobTitle,
            companyName: companyName,
            status: "APPLIED",
            dateApplied: Date.now(),
            notes: notes
        })

        console.log('Job Created', job._id);
        return res.status(201).json({ message: "Job created", success: true })
    } catch (err) {
        return res.status(501).json({ message: "Internal Server error", success: false })
    }
}


async function getAlljobs(req, res){
    try {
        const allJobs = await JobsModel.find({});
        return res.status(201).json({message:allJobs, success : true})
    } catch (error) {
        return res.status(501).json({message : "Internal Server Error", success:false})
    }
}


module.exports = {
    createJob,
    getAlljobs
}