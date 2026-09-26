let mongoose=require('mongoose');
let userSchema=new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    emailid:{
        type: String,
        required: true,
        unique: true //same email wont inserted twice
    },
    password:{
        type: String,
        required: true
    },
    role:{
        type: String,
        enum: ['hr', 'employee'],//enumeration
        default: 'employee'
    }
});
let users=mongoose.model("users",userSchema);
module.exports={users};
