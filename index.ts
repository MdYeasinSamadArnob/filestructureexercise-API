import mongoose from "mongoose";
import app from "./app";
import config from "./config";

async function serverStart() {
  try {
    
    await mongoose.connect(config.database_url as string)
    console.log("Database running");
    app.listen(config.port, () => {
      console.log(`Server listening on port ${config.port}`);
    });
  } catch (error) {
    console.log("Failed ", error);
  }
}
serverStart();







// import express, { Express, Request, Response } from 'express';
// import dotenv from 'dotenv';

// dotenv.config();

// const app: Express = express();
// const port = process.env.PORT;

// app.get('/', (req: Request, res: Response) => {
//   res.send('Express + TypeScript Server');
// });

// app.listen(port, () => {
//   console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
// });