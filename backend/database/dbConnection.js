import mongoose from "mongoose"

export const dbConnection=()=>{
  mongoose.connect("mongodb://localhost:27017",{dbName:"MERN_STACK_EVENT_MESSAGE"}).then(()=>{
    console.log("connected to database")
  }).catch((err)=>{
    console.log("Some error occured while connecting to data")
  })
}