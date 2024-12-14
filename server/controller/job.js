const JobsModel = require("../model/job");

async function createJob(req, res) {
    try {
        const { jobTitle, companyName, notes } = req.body;


        //validating feilds
        if (!jobTitle || !companyName) {
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


async function getAlljobs(req, res) {
    try {
        const allJobs = await JobsModel.find({});
        return res.status(201).json({ message: allJobs, success: true })
    } catch (error) {
        return res.status(501).json({ message: "Internal Server Error", success: false })
    }
}

async function findJob(req, res) {
    try {
        const id = req.params.id;
        if (!id) return res.status(400).json({ message: "Invalid GET request", success: false })

        const job = await JobsModel.findById(id);
        if (!job) return res.status(400).json({ message: "No such job registered", success: false })


        return res.status(201).json({ message: job, success: true });
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error", success: false });
    }
}


async function updateJob(req, res) {
    try {
        const { jobTitle, companyName, status, notes } = req.body;
        const id = req.params.id;

        if (!id) return res.status(400).json({ message: "Invalid  request", success: false })

        if (!jobTitle || !companyName || !notes || !status)
            return res.status(400).json({ message: "Invalid  request", success: false })

        const job = await JobsModel.findById(id);

        if (!job) return res.status(400).json({ message: "No such job registered", success: false })

        await JobsModel.findOneAndUpdate({
            _id : id
        }, {
            $set: {
                jobTitle: jobTitle,
                companyName: companyName,
                status: status,
                notes: notes
            }
        })
        return res.status(201).json({message:"Job Application Updated", success:true})
    }
    catch (error) {
        return res.status(500).json({ message: "Internal Server Error", success: false });
    }

}


module.exports = {
    createJob,
    getAlljobs,
    findJob,
    updateJob
}