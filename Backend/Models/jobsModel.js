const MongoDB = require('mongodb');


exports.addjob = async (db, jobData)=>{
    try{
        const collection = db.collection('jobs');
        const result = await collection.insertOne(jobData);
        return result;
    } catch(error){
        throw new Error('Error Adding Job: ', error.message);
    }

}

exports.getjobs = async (db)=>{
    try{
        const collection = db.collection('jobs');
        const result = await collection.find({}).toArray();
        return result;
    } catch(error){
        throw new Error('Error geting jobs', error.message);
    }

}

exports.jobById = async (db, id)=>{
    try{
        const collection = db.collection('jobs');
        const result = await collection.findOne({ _id: new MongoDB.ObjectId(id) });
        return result;
    } catch(error){
        throw new Error('Error while detail', error.message);
    }
}