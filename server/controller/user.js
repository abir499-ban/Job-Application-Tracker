const bycrypt = require('bcrypt');
const UserModel = require('../model/user');



async function createUser(req, res){
    try {
        const {name, email, password, gender, role}  = req.body;
        if(!name || !email || !password || !role) 
            return res.status(401).json({message:"Invalid Request", success:false})


        const User = await UserModel.findOne({email : email});
        if(User)
            return res.status(401).json({message:"User Already exists", success:false})

        const salt = await bycrypt.genSalt(10);
        const hashedPassword = await bycrypt.hash(password, salt);
        const user = await UserModel.create({
            name,
            email,
            password : hashedPassword,
            gender,
            role
        })

        return res.status(201).json({message:"User successfully created", success:true})

        
    } catch (error) {
        return res.status(501).json({message:"INternal Server error", success:false})
    }
}

module.exports = {
    createUser
}