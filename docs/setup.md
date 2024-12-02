# Setup Guide

## 1. Install PostgreSQL

First, you need to install PostgreSQL. You can download it from the [official PostgreSQL website](https://www.postgresql.org/download/).

## 2. Create `config.ts`

Create a file named `config.ts` in your project directory and add the following content:

```typescript
import { Pool } from 'pg';

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT || '5432', 10),
});

export default pool;
```

## 3. Write `.env`

Create a `.env` file in your project directory and add your database configuration:

```text
DB_USER=your_db_user
DB_HOST=localhost
DB_NAME=your_db_name
DB_PASSWORD=your_db_password
DB_PORT=5432
```

## 4. Final Steps

Ensure all dependencies are installed by running:

```bash
npm install
```

Then, you can start your application:

```bash
npm start
```

Your application should now be connected to the PostgreSQL database.
