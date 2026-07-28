# Expense Control System

A residential expense control system developed as a technical challenge.

## Technologies

- ASP.NET Core
- C#
- Entity Framework Core
- SQLite
- React
- TypeScript
- Axios

## Features

### Person Management

- Create person
- List people
- Delete person
- Automatic cascade deletion of related transactions

### Transaction Management

- Create transaction
- List transactions

Business rule:

- Minors (under 18 years old) can only register expenses.

### Financial Report

Displays for each person:

- Total income
- Total expenses
- Balance

Also displays:

- Overall income
- Overall expenses
- Overall balance

## Project Structure

Backend

- Controllers
- Models
- DTOs
- Data
- Enums

Frontend

- Components
- Types
- Services

## Running the project

### Backend

```bash
dotnet restore
dotnet ef database update
dotnet run
```

### Frontend

```bash
npm install
npm run dev
```

## Database

SQLite

The database is automatically persisted between executions.

## Author

Enzo Amaral
