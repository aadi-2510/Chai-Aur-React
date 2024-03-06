import React from "react";

function LoanEmi() {

    const handleFormSubmit = (e) => {
        e.preventDefault();
        Validation(); 
    };

    let userAttempts = 3;

    const Validation = () => {
        const userOTP = parseInt(document.querySelector("#userOTP").value);
        const systemOTP = parseInt(localStorage.getItem("systemOTP"));
        console.log(userOTP);
        console.log(systemOTP);

        if (userAttempts === 1) {
            const disableAttempt = document.getElementById("submit");
            disableAttempt.setAttribute("disabled", "disabled"); 
            console.log(disableAttempt);
        }

        if (systemOTP === userOTP) {
            alert(`OTP Validation successful`);
        } else if (systemOTP !== userOTP && userAttempts === 3) {
            alert(`OTP don't match. You have 2 attempts left`);
            userAttempts--;
        } else if (systemOTP !== userOTP && userAttempts === 2) {
            alert(`OTP don't match. You have 1 attempt left`); 
            userAttempts--;
        } else if (systemOTP !== userOTP && userAttempts === 1) {
            alert(`OTP don't match. You have 0 attempts left`);
        } else {
            alert("OTP Validation Failed!");
        }
    };

    return(
    <div>
        <form id="myform" onSubmit={handleFormSubmit} > 
            <label htmlFor="userOTP"> Submit OTP</label> 
            <input type="text" id="userOTP"/>
            <input type="submit" id="submit" />
        </form>
    </div>
    
    )
}
            
export default LoanEmi;
