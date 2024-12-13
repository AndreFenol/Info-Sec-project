document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.querySelector(".hero-buttons button:first-child");
    const registerButton = document.querySelector(".hero-buttons button:last-child");
    const postsContainer = document.querySelector(".posts-container");

    // Navigate to Login Page
    loginButton.addEventListener("click", () => {
        window.location.href = "login.html";
    });

    // Navigate to Register Page
    registerButton.addEventListener("click", () => {
        window.location.href = "register.html";
    });

    // Fetch and Display Recent Posts (Dynamic Content)
    async function fetchRecentPosts() {
        try {
            const response = await fetch('/api/recent-posts'); // Replace with your backend endpoint
            if (!response.ok) throw new Error("Failed to fetch recent posts");

            const posts = await response.json();

            // Clear the posts container
            postsContainer.innerHTML = "";

            // Populate with fetched posts
            posts.forEach(post => {
                const postElement = document.createElement("div");
                postElement.classList.add("post");
                postElement.innerHTML = `
                    <h3>${post.title}</h3>
                    <p>${post.excerpt}</p>
                    <a href="post-details.html?id=${post.id}">Read More</a>
                `;
                postsContainer.appendChild(postElement);
            });
        } catch (error) {
            console.error("Error fetching recent posts:", error);
            postsContainer.innerHTML = "<p>Unable to load recent posts. Please try again later.</p>";
        }
    }

    // Fetch posts when the page loads
    fetchRecentPosts();
});
