import mongoose from "mongoose";

export const connect = async() =>{
    // await mongoose.connect(`mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.5/twitter_Dev`);
    await mongoose.connect('mongodb://127.0.0.1:27017/twitter_Dev');
}


