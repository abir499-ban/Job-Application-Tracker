const bycrypt = require('bcrypt');
const UserModel = require('../model/user');
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv');
dotenv.config();
const TOKEN_SECRET = process.env.TOKEN_SECRET;


async function createUser(req, res) {
    try {
        const { name, email, password, gender, role } = req.body;
        if (!name || !email || !password || !role)
            return res.status(401).json({ message: "Invalid Request", success: false })


        const User = await UserModel.findOne({ email: email });
        if (User)
            return res.status(401).json({ message: "User Already exists", success: false })

        const salt = await bycrypt.genSalt(10);
        const hashedPassword = await bycrypt.hash(password, salt);
        const user = await UserModel.create({
            name,
            email,
            password: hashedPassword,
            gender,
            role
        })

        return res.status(201).json({ message: "User successfully created", success: true })


    } catch (error) {
        return res.status(501).json({ message: "INternal Server error", success: false })
    }
}


async function handlelogin(req, res) {
    try {
        const { email, password } = req.body;
        //validatng all the details
        if (!email || !password) return res.status(401).json({ message: "All feilds are required" ,success:false});
        //checking if the email exits
        const user = await UserModel.findOne({ email: email }).lean();
        if (!user) return res.status(401).json({ message: "Invalid email address" })
        //matching the password
        const doesPasswordMatch = await bycrypt.compare(password, user.password);
        if (!doesPasswordMatch) return res.status(401).json({ message: 'Wrong Password' , success:false});
        //Generating the token
        const token = jwt.sign({
            id:user._id,
            name:user.name,
            email : user.email,
            gender:user.gender,
            role: user.role
        }, TOKEN_SECRET);
        //updating the user data to be saved
        const sanitizedUser = { ...user, password: undefined };
        //sending the response
        return res.status(201).json({ token, sanitizedUser , success:true});
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "server error" });
    }


}

module.exports = {
    createUser,
    handlelogin
}