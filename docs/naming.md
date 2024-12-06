# Common Naming Conventions

- Variable names should be in camelCase, e.g., `const myVariable = 10;`
- Function names should be in camelCase, e.g., `function myFunction() {}`
- Class names should be in PascalCase, e.g., `class MyClass {}`
- File names should be in kebab-case, e.g., `my-file.js`
- Folder names should be in kebab-case, e.g., `my-folder`
- Database table names should be in snake_case and plural, e.g., `my_tables`
- Database column names should be in snake_case, e.g., `my_column`
- Database primary keys should be named `id`, be of integer type, and auto-increment, e.g., `id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true }`
- Database foreign keys should be the singular form of the table name followed by `_id`, e.g., `user_id`

# API Naming Conventions

- API endpoints should be in kebab-case, e.g., `/my-endpoint`
- API endpoints should be plural of the entity name, e.g., `/users`
- API endpoints should be versioned, e.g., `/v1/users`

# HTTP Methods

- Use GET to fetch data from the server
- Use POST to create data on the server
- Use PUT to update data on the server
- Use DELETE to remove data from the server
- Use PATCH to partially update data on the server

# Status Codes

- `200 OK` - The request was successful
- `201 Created` - The request was successful and a new resource was created
- `204 No Content` - The request was successful but there is no content to send in the response
- `400 Bad Request` - The request was invalid or cannot be served
- `401 Unauthorized` - The request requires user authentication
- `403 Forbidden` - The server understood the request but refuses to authorize it
- `404 Not Found` - The requested resource could not be found
- `405 Method Not Allowed` - The request method is known by the server but has been disabled and cannot be used
- `500 Internal Server Error` - The server encountered an unexpected condition

# Response Format

- Responses should be in JSON format
- Responses should include:
    - `status` key with the status code
    - `message` key with a message
    - `data` key with the data
    - `errors` key with any errors

# Example Response

```json
{
        "status": 200,
        "message": "Success",
        "data": {
                "id": 1,
                "name": "John Doe",
                "email": "johndoe@gmail.com",
                "createdAt": "2021-01-01T00:00:00.000Z",
                "updatedAt": "2021-01-01T00:00:00.000Z"
        },
        "errors": []
}
```

# Error Handling

- Errors should be in JSON format
- Errors should include:
    - `status` key with the status code
    - `message` key with a message
    - `errors` key with any errors
    - `stack` key with the stack trace

# Example Error

```json
{
        "status": 400,
        "message": "Bad Request",
        "errors": [
                {
                        "field": "email",
                        "message": "Email is required"
                }
        ],
        "stack": "Error: Bad Request\n    at /path/to/file.js:10:20"
}
```
