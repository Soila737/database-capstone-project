// budget.js

export function calculateTotal(expenses) {
    return expenses.reduce((total, expense) => {
        return total + expense.amount;
    }, 0);
}


export function renderExpenses(expenses, expenseList, totalElement) {

    // Clear current expense list
    expenseList.innerHTML = "";

    // Display each expense
    expenses.forEach((expense) => {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${expense.description}</td>
            <td>KSh ${expense.amount.toFixed(2)}</td>
        `;

        expenseList.appendChild(row);
    });

    // Calculate total
    const total = calculateTotal(expenses);

    // Display total
    totalElement.textContent = `KSh ${total.toFixed(2)}`;
}
