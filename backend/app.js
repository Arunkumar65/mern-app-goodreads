import express from "express"
import './config/database';
import { userRouter } from './router/user';
import { InfiniteScroll } from "./controller/infiniteScroll.js";
import 'dotenv/config';
import cors from "cors";

const app = express();
app.use(cors())
app.use(express.json());

const port = process.env.PORT;

app.get('/', (req, res) => {
    res.send("Hello world")
});

app.use(cors())
app.use('/users', userRouter);
app.use('/infinite', InfiniteScroll);

app.listen(port, () => {
    console.log(`Listen port ${port}`)
});

