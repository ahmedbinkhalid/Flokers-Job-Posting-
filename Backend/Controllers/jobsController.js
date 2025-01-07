const jobModel = require('../Models/jobsModel');
const subsController = require('./subsController')

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
        await subsController.sendEmailsToSubscribers(db, carData);
    } catch(error){
        console.error("Error:", error);
        res.status(500).json({message: error.message});
    }

}

exports.getJobsAll = async (req, res, next) =>{
    try{
        const db = req.app.locals.db;
        const result = await jobModel.getjobs(db);
        res.status(200).json(result);
    } catch(error){
        res.status(500).json({message: error.message})
    }

}

exports.getJobById = async (req, res, next)=>{
    const db = req.app.locals.db;
    try{
        
        const jobId = req.params.id;
        const result = await jobModel.jobById(db, jobId);
        if(!result){
            res.status(404).json({message: 'Job not found'});
        }else{
            res.status(200).json(result);
        }
    } catch (error){
        res.status(500).json({message: error.message})
    }
}