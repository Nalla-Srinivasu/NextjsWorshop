const { default: mongoose } = require("mongoose");

const laptopSchema = new mongoose.Schema({
    title:{
        type:"String",
        required:true,
        unique:true
    },
    model:{
        type:"String",
        required:true,
        unique:true
    },
    price:{
        type:Number,
        required:true,
        unique:false
    }
},{timestamps:true});

const laptopModel = mongoose.model.laptopSchema || mongoose.model("laptops",laptopSchema)

export default laptopModel