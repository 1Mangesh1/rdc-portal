# Middlewares

This folder contains middleware functions for the backend server. Middlewares are functions that execute during the request-response cycle and can modify the request or response objects.

## Files

- `authMiddleware.ts`: Checks if the user is authenticated.
- `errorHandler.ts`: Handles errors and exceptions.
- `logger.ts`: Logs request details for debugging purposes.

## Usage

Middlewares should be used to handle common tasks such as authentication, logging, and error handling.
