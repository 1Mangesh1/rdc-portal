import { Request, Response } from "express";
import bcrypt from "bcrypt";
import {
  findAll,
  findOne,
  findByEmail,
  create,
  edit,
  remove,
} from "../services/user.service";

export const register = async (req: Request, res: Response) => {
  try {
    const user = await create(req.body);
    res.status(201).json({ message: "User created successfully", user: user });
  } catch (error) {
    res.status(400).json({ message: "Error creating user", error: error });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await findByEmail(email);
    if (!user) {
      res.status(401).json({ message: "Invalid email" });
      return;
    }

    const validatePassword = await bcrypt.compare(password, user.password);
    if (!validatePassword) {
      res.status(401).json({ message: "Invalid password" });
      return;
    }

    res.status(200).json({ message: "Successfully logged in", user: user });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong in login", error: error });
  }
};

export const getAll = async (req: Request, res: Response) => {
  try {
    const users = await findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send("Error fetching users");
  }
};

export const getOne = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  try {
    const user = await findOne(id);
    if (!user) {
      res.status(404).json({ message: `User with id: ${id} not found` });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Error fetching the user", error });
  }
};

export const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const updatedUser = await edit(+id, req.body);
    res
      .status(200)
      .json({ message: "User updated successfully", user: updatedUser });
  } catch (error) {
    res.status(400).json({ message: "Error updating user", error: error });
  }
};

export const deleteOne = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await remove(+id);
    res.status(204).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};
