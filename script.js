// Import functions from budget.js
import {
    calculateTotal,
    renderExpenses
} from "./budget.js";


// Array to store expenses
const expenses = [];


// Select HTML elements
const expenseForm = document.getElementById("expenseForm");

const descriptionInput =
    document.getElementById("description");

const amountInput =
    document.getElementById("amount");

const expenseList =
    document.getElementById("expenseList");

const totalAmount =
    document.getElementById("totalAmount");


// Handle form submission
expenseForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const description =
        descriptionInput.value.trim();

    const amount =
        Number(amountInput.value);


    // Validation
    if (description === "") {
        alert("Please enter an expense description.");
        return;
    }

    if (amount <= 0 || Number.isNaN(amount)) {
        alert("Please enter a valid amount.");
        return;
    }


    // Create expense object
    const newExpense = {
        description: description,
        amount: amount
    };


    // Add expense
    expenses.push(newExpense);


    // Update display
    renderExpenses(
        expenses,
        expenseList,
        totalAmount
    );


    // Clear form
    expenseForm.reset();

    descriptionInput.focus();
});


// Initial display
renderExpenses(
    expenses,
    expenseList,
    totalAmount
);
