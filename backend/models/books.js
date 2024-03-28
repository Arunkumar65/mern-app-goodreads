import mongoose, { Model } from "mongoose";
const { model, Schema } = mongoose;

const BooksSchema = new Schema({
    title: String,
    thumbnailUrl: String,
    shortDescription: String,
    longDescription: String,
    publishedDate: String,
    status: String,
    authors: [String],
    categories: [String],
    pageCount: String,
    isbn: String,
});

export default model('Books', BooksSchema, 'books');