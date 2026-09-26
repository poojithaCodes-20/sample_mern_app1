let express=require('express');
let app=express();
<<<<<<< HEAD
let emproutes=require('./routes/emp_routes');
app.use("/api/emp",emproutes);
app.listen(3000,()=>{
    console.log("server listening on port 3000");
})
=======
let mongoose=require('mongoose');
app.use("/api/emp",emproute);   
//localhost:3000/api/emp/updatetask =>patch


//run the server
app.listen(3000,()=>{
    console.log("server listening at port 3000");
});
>>>>>>> 72d45099a6071ff013bf9067c1ffd43c09b7ebb0
