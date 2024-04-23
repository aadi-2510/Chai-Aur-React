import React from 'react';

function Loandoc() {
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const OTP = Math.round(Math.random() * 10000 + 1000);
        localStorage.setItem("systemOTP", OTP);
        alert(OTP);
    };

    const calculateEMI = (principalAmount) => {
        const ROI = 8.5;
        const tenure = 15;
        const monthlyInterestRate = (ROI / 12) / 100;
        const numberOfPayments = (tenure * 12);
        const numerator = (principalAmount * monthlyInterestRate * (Math.pow(1 + monthlyInterestRate, numberOfPayments)));
        const denominator = (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
        const EMI = numerator / denominator;
        return EMI.toFixed(2);
    };

    const handleCalculateClick = () => {
        const principalAmount = parseInt(document.getElementById('loanAmount').value);
        const calculatedEMI = calculateEMI(principalAmount);
        const resultElement = document.getElementById('result');
        resultElement.innerText = `Your installment amount is Rs.${calculatedEMI}/- per month.`;
    };

    return (
        <div>
            <form id="userForm" onSubmit={handleFormSubmit}>
                <label htmlFor="name">Enter Full Name</label>
                <input type="text" id="name" />

                <label htmlFor="email">Enter Your Email</label>
                <input type="email" id="email" size="30" required />

                <label htmlFor="panCard">Enter PAN Number</label>
                <input type="text" id="panCard" pattern="([A-Z]){5}([0-9]){4}([A-Z]){1}" required />

                <label htmlFor="loanAmount">Loan Amount</label>
                <input type="number" id="loanAmount" required min="1" max="99999" />
                <button type="button" id="calculate" onClick={handleCalculateClick}>CALCULATE</button>

                <hr />

                <input type="submit" id="submit" value="SUBMIT" />
            </form>

            <p id="result"></p>
        </div>
    );
}

export default Loandoc;
