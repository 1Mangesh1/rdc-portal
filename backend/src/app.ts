import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import { getUsers, createUser } from './controllers/userController';
dotenv.config();
import {userRouter} from "./routes/userRoutes"
import { videoRouter } from './routes/videoRouter';
const app = express();
const port = process.env.PORT || 3000;



app.use(express.json());


app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript!');
});

app.use("/users",userRouter)
app.use("/videos",videoRouter)



app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});