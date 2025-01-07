
const bcrypt = require('bcrypt');

exports.createUser = async (db, userData)=>{
    const {name, email, password, role} = userData;
    const hashedPassword = await bcrypt.hash(password, 5);
    const user = {
        name,
        email,
        password: hashedPassword,
        role,
        dateRegistered : new Date(),

    }
    // Inserting the new user into the collection
    const result = await db.collection('users').insertOne(user);
    return result;

}

// funtion to find user by email

exports.findUserByEmail = async (db, email) =>{
    const user = await db.collection('users').findOne({email});
    return user;
}