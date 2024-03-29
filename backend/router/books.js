import express from "express";
import { protect } from "../middleware/verifyToken";
import { getAllBooks } from "../controller/books";

const booksRouter = express.Router();

booksRouter.get('/get-all-books', protect, getAllBooks);

export { booksRouter };

