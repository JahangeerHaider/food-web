import mongoose from "mongoose";

 export const dbConnection = () =>{

    mongoose.connect(process.env.MONGO_URI,{
        dbName: 'RESTURANT'
    })
    .then(()=>{
        console.log('server is connected to database successfuly!')
    })
    .catch(()=>{
        console.log(`Server is not connected to database!${err}`);
    })
};