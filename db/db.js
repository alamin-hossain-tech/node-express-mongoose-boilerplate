import mongoose from "mongoose";

const dbString = process.env.MONGO_STRING ?? "mongodb://localhost:27017";
const dbName = process.env.MONGO_DATABASE ?? "test";
const mongoString = dbString + "/" + dbName;

// database connection request Start
let cachedDB = null;

const dbConnect = async () => {
  try {
    if (!cachedDB) {
      cachedDB = await mongoose.connect(mongoString);
      console.log("connected to mongodb");
    }
    return cachedDB;
  } catch (error) {
    console.log(error.message);
  }
};
// database connection request End

export default dbConnect;
