const {Schema,model}  = require('mongoose')


const UserSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    gender:{
        type:String,
        enum: ['Male', 'Female', 'Nan'],
        required:true
    },
    role:{
        type:String,
        enum:['User', 'Admin'],
        default:'User',
    }
})

const UserModel = model('user', UserSchema);
module.exports = UserModel