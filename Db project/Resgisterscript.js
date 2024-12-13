document.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.querySelector("form");
    const registerBtn = document.querySelector(".register-btn");

    // Helper function to validate form inputs
    function validateForm() {
        const inputs = registerForm.querySelectorAll("input");
        for (let input of inputs) {
            if (!input.value.trim()) {
                alert("Please fill in all fields.");
                input.focus();
                return false;
            }
        }
        return true;
    }

    // Handle regular user registration
    registerBtn.addEventListener("click", function (event) {
        event.preventDefault();
        if (validateForm()) {
            alert("User registration successful!");
            registerForm.submit(); // Replace this with an API call if needed
        }
    });

    // Handle admin registration
    adminBtn.addEventListener("click", function (event) {
        event.preventDefault();
        if (validateForm()) {
            const confirmAdmin = confirm("Are you sure you want to register as an Admin?");
            if (confirmAdmin) {
                alert("Admin registration successful!");
                registerForm.submit(); // Replace this with an API call if needed
            }
        }
    });
});
