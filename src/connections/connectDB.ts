import { connect, connections } from "mongoose"

const connectDB=async()=>{
    if(connections[0].readyState)return;
    await connect(process.env.MONGO_URI as string);
    console.log("connect to db :)");
  
}
export default connectDB;