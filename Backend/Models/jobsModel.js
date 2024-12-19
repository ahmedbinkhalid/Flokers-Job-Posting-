
exports.addjob = async (db, jobData)=>{
    try{
        const collection = db.collection('jobs');
        const result = await collection.insertOne(jobData);
        return result;
    } catch(error){
        throw new Error('Error Adding Job: ', error.message);
    }

}