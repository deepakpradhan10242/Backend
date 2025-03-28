import userModel from "../models/userModel.js";

export const updateUserData = async (req, res) => {
    try {
        const { userId } = req.params; 
        const { name, email, address } = req.body;  

       
        const user = await userModel.findById(userId);
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        
        if (name) user.name = name;
        if (email) user.email = email;
        if (address) user.address = address;

        
        await user.save();

        res.status(200).json({
            success: true,
            message: "User data updated successfully",
            userData: {
                id: user._id,
                name: user.name,
                email: user.email,
                address: user.address,
            }
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        });
    }
};
