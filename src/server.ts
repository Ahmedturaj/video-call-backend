// import mongoose from 'mongoose';
// import app from './app';
// import config from './app/config';

// const PORT = config.port;

// const main = async () => {
//   try {
//     if (!config.mongoUri) {
//       throw new Error('MongoDB URI is not defined in environment variables.');
//     }

//     const mongo = await mongoose.connect(config.mongoUri);
//     console.log(`✅ MongoDB connected: ${mongo.connection.host}`);

//     app.listen(PORT, () => {
//       console.log(`🚀 Server running on http://localhost:${PORT}`);
//     });
//   } catch (error: any) {
//     console.error('❌ Error starting server:', error.message || error);
//     process.exit(1);
//   }
// };

// main();


import mongoose from "mongoose";
import app from "./app";
import config from "./app/config";
import http from "http";
import { initSocket } from "./app/socket";

async function main() {
  try {
    if(!config.mongoUri){
      throw new Error("MongoDB URI is not defined in environment variables.");
    }
    const mongo = await mongoose.connect(config.mongoUri as string);
    console.log(`MongoDB connected: ${mongo.connection.host}`);
    const server = http.createServer(app);

    initSocket(server);

    server.listen(config.port, () => {
      console.log(`Server running on port ${config.port}`);
    });

  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

main();