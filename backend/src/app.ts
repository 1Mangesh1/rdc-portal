import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import { getUsers, createUser } from './controllers/userController';
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript!');
});

app.get('/users', async (req: Request, res: Response) => {
  try {
    const users = await getUsers();
    res.json(users);
  } catch (error) {
    res.status(500).send('Error fetching users');
  }
});

app.post('/users', async (req: Request, res: Response) => {
  try {
    const user = await createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(`Error creating user ${error}`,);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});