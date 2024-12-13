const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
    jobTitle : {
        type:String,
        required:true,
    },
    companyName : {
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:["APPLIED", "INTERVIEWING" , "OFFERED" , "REJECTED"],
        default : "APPLIED",
    },
    dateApplied:{
        type:Date
    },
    notes:{
        type:String,
    }
}, {
    timestamps : true
})


const JobsModel = mongoose.model('job', JobSchema);



module.exports = JobsModel