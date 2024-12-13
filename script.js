document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector("form");
    const adminLoginBtn = document.querySelector(".admin-login");

    // Helper function to validate form inputs
    function validateForm() {
        const emailInput = loginForm.querySelector("input[type='email']");
        const passwordInput = loginForm.querySelector("input[type='password']");

        if (!emailInput.value.trim() || !passwordInput.value.trim()) {
            alert("Please enter both email and password.");
            return false;
        }
        return true;
    }

    // Handle user login
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        if (validateForm()) {
            alert("User login successful!");
            window.location.href = "Homepage.html"; // Replace with user homepage
        }
    });

});

