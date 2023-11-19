
import app from "./app"
import mongoose from "mongoose";
import config from "../config";

// let server: Server;


const serverApplication = async () => {
  try {
    await mongoose.connect(config.DB_URL as string);
    console.log("mongodb connected");

    app.listen(config.Port, () => {
      console.log("Server Application runnig from  port no:", config.Port)
    });

  } catch (error) {
    console.log(error);
  }
  
}

serverApplication()




