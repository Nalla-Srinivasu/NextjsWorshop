const { default: mongoose } = require("mongoose");

const addUserSchema = new mongoose.Schema({
    name:{
        type:"String",
        required:true
    },
    mobile:{
        type:"Number",
        required:true,
        unique:true
    },
    age:{
        type:"Number",
        required:true
    }
},{timestamps:true});

const userModel = mongoose.models.addUser || mongoose.model('addUser',addUserSchema)

export default userModel;