const mongoose = require('mongoose')
require('dotenv').config();

async function dbConnect(){
    return(
        mongoose.connect(process.env.MONGODB_URL).then(()=>console.log("MongoDB connected successfully"))
        .catch((err)=>console.log(err.message))
    )
}


module.exports = {
    dbConnect
}