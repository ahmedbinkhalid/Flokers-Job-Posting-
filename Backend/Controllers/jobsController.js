const jobModel = require('../Models/jobsModel');

exports.addJob = async (req, res, next)=>{
    try{
        const db = req.app.locals.db;
        const jobData = {
            jobCategory : req.body.jobCategory,
            jobTitle : req.body.jobTitle,
            jobDescription : req.body.jobDescription,
            jobLocation : req.body.jobLocation,
            jobType : req.body.jobType,
            jobRequirements :req.body.jobRequirements,
            jobEmail: req.body.jobEmail,
            dateAdded : new Date()

        };
        const result = await jobModel.addjob(db, jobData);
        res.status(200).json({message: "Job Added Successfuly", jobId: result.insertedId})
    } catch(error){
        console.error("Error:", error);
        res.status(500).json({message: error.message});
    }

}