# Budget Tracker

## Description

Budget Tracker is a simple responsive web application that allows users to add expenses, view their expense list, and calculate the total amount spent.

This project was completed as part of my Web Development capstone project.

## Features

- Add expense descriptions
- Add expense amounts
- Display expenses in a table
- Automatically calculate total expenses
- Input validation
- Responsive design
- Bootstrap styling
- JavaScript ES Modules
- Separate budget logic
- Mobile-friendly layout
- Published using GitHub Pages

## Technologies Used

- HTML5
- CSS3
- JavaScript
- ES Modules
- Bootstrap 5
- Git
- GitHub
- GitHub Pages

## Project Structure

budget-tracker/
│
├── index.html
├── style.css
├── script.js
├── budget.js
└── README.md

## ES Modules

The project uses JavaScript ES Modules.

The `calculateTotal()` and `renderExpenses()` functions are stored in:

budget.js

They are exported from `budget.js` and imported into `script.js`.

Example:

```javascript
import {
    calculateTotal,
    renderExpenses
} from "./budget.js";
