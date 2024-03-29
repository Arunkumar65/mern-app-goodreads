import express from "express"
import './config/database';
import { userRouter } from './router/user';
import { booksRouter } from './router/books';
import { InfiniteScroll } from "./controller/infiniteScroll.js";
import 'dotenv/config';
import cors from "cors";

const app = express();

app.use(cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204
}));

app.use(express.json());

const port = process.env.PORT;

app.get('/', (req, res) => {
    res.send("Hii")
});

app.use('/users', userRouter);
app.use('/book', booksRouter);
app.use('/infinite', InfiniteScroll);

app.listen(port, () => {
    console.log(`Listen port ${port}`)
});

