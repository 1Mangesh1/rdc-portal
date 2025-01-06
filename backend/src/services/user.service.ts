import bcrypt from "bcrypt";
import { sequelize } from "../config/Connection";
import { User } from "../models/User";

type UserDTO = {
  name: string;
  email: string;
  password: string;
  role: string;
  phone?: string;
};

export const findAll = async () => {
  await sequelize.sync();
  try {
    const users = await User.findAll();
    return users;
  } catch (error) {
    throw new Error(`Error retrieving users ${error}`);
  }
};

export const findOne = async (id: number) => {
  try {
    return await User.findByPk(id);
  } catch (error) {
    throw new Error(`Error fetching user by id: ${id}, error: ${error}`);
  }
};

export const findByEmail = async (email: string) => {
  try {
    const user = await User.findOne({ where: { email } });
    return user;
  } catch (error) {
    throw new Error(`Error finding user with email: ${email}`);
  }
};

export const create = async (user: UserDTO) => {
  await sequelize.sync();
  try {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    const newUser = await User.create({ ...user, password: hashedPassword });
    return newUser;
  } catch (error) {
    throw new Error(`Error creating user: ${error}`);
  }
};

export const edit = async (id: number, updatedUserDTO: Partial<UserDTO>) => {
  let user = await User.findByPk(id);
  if (!user) throw new Error(`User with id ${id} not found`);
  try {
    if (updatedUserDTO.password) {
      updatedUserDTO.password = await bcrypt.hash(updatedUserDTO.password, 10);
    }
    console.log(updatedUserDTO.password);
    await User.update({ ...user, ...updatedUserDTO }, { where: { id } });
    user = await User.findByPk(id);
    return user;
  } catch (error) {
    throw new Error(`Error updating user with id: ${id}, error: ${error}`);
  }
};

export const remove = async (id: number) => {
  try {
    const result = await User.destroy({ where: { id } });
    return result;
  } catch (error) {
    throw new Error(`Error deleting user with id: ${id}, error: ${error}`);
  }
};
