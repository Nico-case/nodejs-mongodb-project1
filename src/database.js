import mongoose from "mongoose";
import {MONGODB_URI} from "./config";


(async () => {

try{

  const db = await mongoose.connect(MONGODB_URI);
  console.log("Holaaaeasseda", db.connection.name);
} catch(error){
   console.error(error);
}
})();

export const PORT = process.env.PORT || 3000;