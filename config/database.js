import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
  mongoose.set("strictQuery", true);
  // if the connection is already established dont connect again
  if (connected) {
    console.log("mongoose is connected");
    return;
  }
  // connect to mongodb
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "propertypulse",
    });
    connected = true;
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
