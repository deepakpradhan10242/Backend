import userModel from "../models/userModel.js";

export const getUserData = async(req,res)=>{
    try{
        const {userId} =req.body; 

        const user = await userModel.findById(userId);
        if(!user){
            return res.json({success:false,message:"User not found"});
        }

        res.json({
            success:true,
            userData:{
                id:user._id,
                name:user.name,
                email:user.email,
                address:user.address,
            }
        });
        
    }catch(error){
        res.json({
            success:false,
            message:error.message
        });
    }
}