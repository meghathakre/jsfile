const AdminModel= require("../models/adminModel");


const adminDataCheck=async(req, res)=>{
    const {user,password}=req.body;
    const Admin=await AdminModel.find({user:user});
    if(Admin.length<1){
        res.status(404).send({msg:"invalid username!"})
    }
    else{
        if(Admin[0].password!=password){
            res.status(404).send({msg:"Invalid Password"})
        }
        else{
            res.status(200).send(Admin)
        }
    }
}


module.exports={
    adminDataCheck
}