import User from "../models/userModel.js";


export const registerUser = async (req,res)=>{
    const {name,email,password} = req.body;

    //check if userExists
    const userExists = await User.findOne({email})

    if (userExists){
        return res.status(400).json({message:"User already exists"});
    }

    // create user
    const user = await User.create({
        name,
        email,
        password,
    });

    if(user){
        res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin,
        });


    }else{
        res.status(400).json({message:"Invalid user data"})
    }
}