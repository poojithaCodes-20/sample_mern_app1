let express=require('express');
let router=express.Router()
let {users} =require('../models/users');
router.get("/viewemp", async (req,res)=>{
    let result=await users.find();
    res.send(result);
})

router.post("/assign-task",(req,res)=>{
    res.send("register route called");
})
router.delete("/deleteemp/:id", async (req,res)=>{
    let result=await users.findByAndDelete(req.params.id):
    if(result){
        res.send("record deleted success");
    }
})


router.get("/viewtask",(req,res)=>{
    res.send(" updateprofile router called");
}) 
module.exports=router;