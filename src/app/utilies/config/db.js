import mongoose from 'mongoose'

export const DBconnection = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to mongo db");
    }catch(error){
        console.log("Mongo db connection error ", error)
    }
}