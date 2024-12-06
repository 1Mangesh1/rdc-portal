# Database Migrations with Sequelize

This document provides a step-by-step guide on how to perform database migrations using Sequelize.

## Prerequisites

- Node.js installed
- Sequelize CLI installed globally (`npm install -g sequelize-cli`)
- A Sequelize project initialized

## Step-by-Step Guide

### 1. Initialize Sequelize

If you haven't already, initialize Sequelize in your project:

```bash
npx sequelize-cli init
```

This will create the following folders:

- `config`: Configuration files
- `models`: Model definitions
- `migrations`: Migration files
- `seeders`: Seeder files

### 2. Configure Database

Edit the `config/config.ts` file to set up your database configuration for different environments (development, test, production).

### 3. Create a Migration

To create a new migration, use the following command:

```bash
npx sequelize-cli migration:generate --name <migration_name>
```

This will create a new file in the `migrations` folder with a timestamp and the specified name.

### 4. Define the Migration

Edit the generated migration file to define the changes you want to make to the database schema. For example:

```javascript
'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Users', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true
            },
            createdAt: {
                type: Sequelize.DATE,
                allowNull: false
            },
            updatedAt: {
                type: Sequelize.DATE,
                allowNull: false
            }
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Users');
    }
};
```

### 5. Run the Migration

To apply the migration and update your database schema, run:

```bash
npx sequelize-cli db:migrate
```

### 6. Reverting a Migration

If you need to undo the last migration, use:

```bash
npx sequelize-cli db:migrate:undo
```

To undo all migrations, use:

```bash
npx sequelize-cli db:migrate:undo:all
```

## Best Practices

- Always backup your database before running migrations.
- Test your migrations in a development environment before applying them to production.
- Use meaningful names for your migration files to describe the changes.

## Conclusion

Following these steps will help you manage your database schema changes effectively using Sequelize migrations. For more detailed information, refer to the [Sequelize documentation](https://sequelize.org/master/manual/migrations.html).
