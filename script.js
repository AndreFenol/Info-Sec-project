// Select the "Create an account" link element
const createAccountLink = document.querySelector("a:contains('Create an Account')"); // Selects anchor tag with text "Create an Account"

if (createAccountLink) {
  // Add click event listener to the link
  createAccountLink.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default anchor tag behavior (page refresh)
    window.location.href = "register.html"; // Redirect to register.html
  });
} else {
  console.error("Create an account link not found!"); // Log an error message if the link is not found
}