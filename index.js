let express=require('express');
let app=express();
let mongoose=require('mongoose');
let emproute=require('./routes/emp_route');
mongoose.connect("mongodb://127.0.0.1:27017/hrmanagemen").then(()=>{
    console.log("mongodb connected");
}).catch((err)=>{
    console.log(err);
});
app.use(express.json());//used to collect input from UI in json format
app.use("/api/emp",emproute);   
//localhost:3000/api/emp/register =>post
//localhost:3000/api/emp/login =>post`
//localhost:3000/api/emp/viewtask =>get
//localhost:3000/api/emp/updatetask =>patch


//run the server
app.listen(3000,()=>{
    console.log("server listening at port 3000");
});