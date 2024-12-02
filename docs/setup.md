# Setup Guide

## 1. Install PostgreSQL

First, you need to install PostgreSQL. You can download it from the [official PostgreSQL website](https://www.postgresql.org/download/).

## 2. Create `Connection.ts`

Create a file named `Connection.ts` in your project directory and add the following content:

```typescript
const { Sequelize, DataTypes } = require('sequelize');
const Pool = require('pg').Pool
import dotenv from 'dotenv';

dotenv.config();


export const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
})

export const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect:process.env.DB_DIALECT,
  logging: false,
});

```

## 3. Create `config.ts`

Create a file named `config.ts` in your project directory and add the following content:

```typescript
module.exports = {
    development: {
      username: 'me',
      password: 'password',
      database: 'rdc',
      host: 'localhost',
      port: 5432,
      dialect: 'postgres',
    },
    // test: {
    //   username: 'me',
    //   password: 'password',
    //   database: 'rdc_test',
    //   host: 'localhost',
    //   port: 5432,
    //   dialect: 'postgres',
    // },
    // production: {
    //   username: 'me',
    //   password: 'password',
    //   database: 'rdc_prod',
    //   host: 'localhost',
    //   port: 5432,
    //   dialect: 'postgres',
    // },
  };
  
```

## 4. Write `.env`

Create a `.env` file in your project directory and add your database configuration:

```text
DB_USER=your_db_user
DB_HOST=localhost
DB_NAME=your_db_name
DB_PASSWORD=your_db_password
DB_PORT=5432
```

## 5. Final Steps

Ensure all dependencies are installed by running:

```bash
npm install
```

Then, you can start your application:

```bash
npm start
```

Your application should now be connected to the PostgreSQL database.
