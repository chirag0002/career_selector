export const getHomePage =(req, res) => {
<<<<<<< HEAD
    res.send("Changing");
=======
    res.send("Changed");
}

export const getQuery=async (req,res)=>{
    const{email,phone,query}=req.body;

    if(!email|| !phone|| !query){
        return res.status(422).json({error:"Please enter valid details"})
    }
    try{
        const userExist=await User.findOne({email:email});
        if(userExist){
            return res.status(422).json({error:"Email already exist"});
        }
        else{
            const user=new user({email,phone,query});
            await user.save();
            res.status(301).json({message:"Query noted"});
        }
    }
    catch(error){
        console.log(error);

    }
>>>>>>> upstream/main
    res.send("Consoling");
}