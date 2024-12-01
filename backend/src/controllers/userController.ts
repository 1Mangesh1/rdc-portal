import {sequelize} from '../config/Connection';
import { User } from '../models/User';

export const createUser = async (user:any) => {
  await sequelize.sync();
  const newUser = await User.create(user);
  return newUser;
};

export const getUsers = async () => {
  await sequelize.sync();
  const users = await User.findAll();
  return users;
}

