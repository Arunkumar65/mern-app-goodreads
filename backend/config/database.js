import mongoose from "mongoose";
import 'dotenv/config';

mongoose.connect(process.env.LOCAL_URL).then((resonse) => {
    console.log("Successfully connected");
}).catch((err) => {
    console.log(err);
})

export default mongoose;