let express=require('express');
let app=express();
let emproutes=require('./routes/emp_routes');
app.use("/api/emp",emproutes);
app.listen(3000,()=>{
    console.log("server listening on port 3000");
})
