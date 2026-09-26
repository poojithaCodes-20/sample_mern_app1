let express=require('express');
let router=express.Router()
let bcrypt=require('bcrypt');
router.post("/register",(req,res)=>{

    res.send("register route called");
})
router.post("/login",async(req,res)=>{
    let data=req.body;
    let emailcheck=await useSyncExternalStore.findOne({emailid:data.emailid})
    if(emailcheck){
        let passcheck=await bcrypt.compare(data.password,emailcheck.password);
        if(passcheck){
            res.send("login successfull");
        }else{
            res.send("password wrong")
        }
        res.send("user found");
    }else{
        res.send("user not found");
    }
    res.send("login router called");
})
router.get("/viewtask",(req,res)=>{
    res.send("viewtask router called");
})
router.patch("/updateprofile",(req,res)=>{
    res.send(" updateprofile router called");
})
module.exports=router;