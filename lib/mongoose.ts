import mongoose from "mongoose";

let isConnect = false;

export const connectToDB= async ()=>{
    mongoose.set('strictQuery',true);

    if (!process.env.MONGODB_URL) return console.log("URL not found")
    if (isConnect) return console.log("Connected to Database")

    try {
       await mongoose.connect(process.env.MONGODB_URL)
        isConnect = true;
        console.log("Connected")
    }
    catch(e){
        console.log("Error connectng to DataBase")
    }

}
