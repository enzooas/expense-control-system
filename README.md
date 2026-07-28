# 💰 Expense Control System

A full-stack residential expense control system developed as a technical challenge using **ASP.NET Core** and **React**.

## 🌐 Live Demo

🔗 https://expense-control-system.vercel.app/

## 📌 Description

Expense Control System allows users to register people, manage incomes and expenses, and automatically generate financial reports.

The project was developed following REST API principles, using a persistent SQLite database and a React + TypeScript frontend.

## 🚀 Technologies

### Backend
- ASP.NET Core (.NET 10)
- C#
- Entity Framework Core
- SQLite
- Swagger

### Frontend
- React
- TypeScript
- Axios
- Vite

## ✨ Features

### 👤 Person Management

- Create person
- List people
- Delete person
- Automatic cascade deletion of related transactions

### 💸 Transaction Management

- Create transactions
- List transactions
- Income and expense registration
- Business rule validation

Business Rule:

- 👶 People under 18 years old can only register **expenses**.

### 📊 Financial Reports

For each registered person:

- Total income
- Total expenses
- Current balance

Overall summary:

- Total income
- Total expenses
- Overall balance

### 📈 Dashboard

- Financial summary cards
- Overall balance visualization
- Income vs Expense chart

## 🏗️ Project Structure

```
expense-control-system
│
├── backend
│   └── ControleGastos.API
│
├── frontend
│   └── expense-control-web
│
└── README.md
```

## ▶️ Running the Project

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

## 💾 Database

SQLite

The database persists data between executions.

## 📷 Screenshots

> *(Add screenshots here after deployment)*

- Dashboard
- Transaction Management
- Financial Report

## 🎯 Objective

This project was developed as a technical challenge to demonstrate knowledge of:

- REST APIs
- Full Stack Development
- ASP.NET Core
- React
- TypeScript
- Entity Framework Core
- Database persistence
- Software architecture
- CRUD operations
- Frontend and Backend integration
- Deployment

## 👨‍💻 Author

**Enzo Amaral**

GitHub:
https://github.com/enzooas

LinkedIn:
*(Add your LinkedIn profile here)*
