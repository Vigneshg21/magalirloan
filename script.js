function calculateLoan() {
    let principalInput = document.getElementById("principalInput").value;
    let interestRateInput = document.getElementById("interestRateInput").value;
    let monthlyPaymentInput = document.getElementById("monthlyPaymentInput").value;

    let principal = parseFloat(principalInput);
    let interestRate = parseFloat(interestRateInput);
    let monthlyPayment = parseFloat(monthlyPaymentInput);

    if (isNaN(principal) || isNaN(interestRate) || isNaN(monthlyPayment) || principal <= 0 || interestRate <= 0 || monthlyPayment <= 0) {
        alert("Please enter valid numeric values greater than zero.");
        return;
    }

    let months = 0;
    let totalInterestPaid = 0;

    let loanTableBody = document.getElementById("loanTableBody");
    loanTableBody.innerHTML = "";  // Clear existing table rows

    while (principal > 0) {
        let monthlyInterest = principal * interestRate;
        totalInterestPaid += monthlyInterest;
        principal -= monthlyPayment;
        principal = Math.max(principal, 0);

        // Create a new table row for each month
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${months + 1}</td>
            <td>${(principal + monthlyPayment).toFixed(2)}</td>
            <td>${monthlyInterest.toFixed(2)}</td>
            <td>${principal.toFixed(2)}</td>
        `;
        loanTableBody.appendChild(row);

        months++;
    }

    // Display the final results
    document.getElementById("monthsResult").textContent = `Number of months to complete the loan: ${months}`;
    document.getElementById("interestResult").textContent = `Total interest paid: ${totalInterestPaid.toFixed(2)}`;
}
