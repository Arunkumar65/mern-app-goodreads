import express from "express";
import { InfiniteScroll } from "../controller/infiniteScroll";
const InfiniteRouter = express.Router();

InfiniteRouter.get('/scroll', InfiniteScroll);