import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  database_url: 'mongodb+srv://yeasinsamadarnob:Klufuv8XWoce70ye@cluster0.wr1wfuo.mongodb.net/?retryWrites=true&w=majority',
};
