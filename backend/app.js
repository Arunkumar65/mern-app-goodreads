import express from "express"
import './config/database';
import { userRouter } from './router/user'

const app = express();
app.use(express.json());
const port = 3001;

app.get('/', (req, res) => {
    res.send("Hello world")
})

app.use('/users', userRouter)

app.listen(port, () => {
    console.log(`Listen port ${port}`)
});

