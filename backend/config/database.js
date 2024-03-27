import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/myapp").then((resonse) => {
    console.log("Successfully connected");
}).catch((err) => {
    console.log(err);
})

export default mongoose;