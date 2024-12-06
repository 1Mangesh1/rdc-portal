
import express, { Request, Response } from 'express';

import { getUsers, createUser } from '../controllers/userController';
export const userRouter = express.Router()


userRouter.get('/', async (req :Request , res: Response) => {
    try {
        const users = await getUsers();
        res.json(users);
      } catch (error) {
        res.status(500).send('Error fetching users');
      }
})

userRouter.post('/', async (req :Request , res: Response) => {
    try {
        const user = await createUser(req.body);
        res.status(201).json(user);
      } catch (error) {
        res.status(500).send(`Error creating user ${error}`,);
      }
})

