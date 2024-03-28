import mongoose from "mongoose";

const { model, Schema } = mongoose;

const imageSchema = new Schema({
    image: String
});

export default model('Image', imageSchema, 'image');