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

/* Docker 
docker run --name mongodb-container -d -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=admin123 mongo
 */
