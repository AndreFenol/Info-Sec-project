document.addEventListener("DOMContentLoaded", function () {
    const tableBody = document.querySelector(".posts-table tbody");
    const addPostBtn = document.querySelector(".add-post-btn");

    // Fetch posts and populate table
    async function fetchPosts() {
        try {
            const response = await fetch("/api/posts"); // Replace with backend endpoint
            if (!response.ok) throw new Error("Failed to fetch posts");

            const posts = await response.json();
            tableBody.innerHTML = ""; // Clear existing rows

            posts.forEach(post => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${post.id}</td>
                    <td>${post.title}</td>
                    <td>${post.author}</td>
                    <td class="actions">
                        <button class="edit-btn" onclick="editPost(${post.id})">Edit</button>
                        <button class="delete-btn" onclick="deletePost(${post.id})">Delete</button>
                    </td>
                `;
                tableBody.appendChild(row);
            });
        } catch (error) {
            console.error("Error fetching posts:", error);
        }
    }

    // Add post functionality
    addPostBtn.addEventListener("click", () => {
        alert("Redirecting to Add Post Form...");
        window.location.href = "add_post.html"; // Redirect to add post page
    });

    // Edit post functionality
    window.editPost = function (id) {
        alert(`Redirecting to Edit Post Form for Post ID: ${id}`);
        window.location.href = `edit_post.html?id=${id}`; // Redirect to edit post page
    };

    // Delete post functionality
    window.deletePost = async function (id) {
        if (confirm("Are you sure you want to delete this post?")) {
            try {
                const response = await fetch(`/api/posts/${id}`, {
                    method: "DELETE",
                });
                if (!response.ok) throw new Error("Failed to delete post");

                alert("Post deleted successfully!");
                fetchPosts(); // Refresh table
            } catch (error) {
                console.error("Error deleting post:", error);
            }
        }
    };

    // Initial fetch
    fetchPosts();
});
