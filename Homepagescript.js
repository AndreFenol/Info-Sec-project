// Function to handle navigation based on button clicks
function handleButtonNavigation(event) {
    const targetSection = event.target.textContent.toLowerCase(); // Get button text content (login or register)
  
    // Define file paths based on your file structure (adjust if necessary)
    const loginPath = "login.html";
    const registerPath = "register.html";
  
    // Redirect to login or register page based on button text
    if (targetSection === "login") {
      window.location.href = loginPath;
    } else if (targetSection === "register") {
      window.location.href = registerPath;
    }
  }
  
  // Attach click event listener to login and register buttons
  const loginButton = document.querySelector(".hero-buttons button:nth-child(1)"); // Select first button within .hero-buttons
  const registerButton = document.querySelector(".hero-buttons button:nth-child(2)"); // Select second button within .hero-buttons
  
  loginButton.addEventListener("click", handleButtonNavigation);
  registerButton.addEventListener("click", handleButtonNavigation);