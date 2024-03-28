import express from "express"
// import './config/database';
import { userRouter } from './router/user';
import { InfiniteScroll } from "./controller/infiniteScroll";
import 'dotenv/config';

const app = express();
app.use(express.json());

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send("Hello world")
});


app.use('/users', userRouter);
app.use('/infinite', InfiniteScroll);

app.listen(port, () => {
    console.log(`Listen port ${port}`)
});

