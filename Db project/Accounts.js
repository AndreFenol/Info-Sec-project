document.addEventListener("DOMContentLoaded", function () {
    const tableBody = document.querySelector(".accounts-table tbody");
    const addAccountBtn = document.querySelector(".add-account-btn");

    // Fetch accounts and populate table
    async function fetchAccounts() {
        try {
            const response = await fetch("/api/accounts"); // Replace with backend endpoint
            if (!response.ok) throw new Error("Failed to fetch accounts");

            const accounts = await response.json();
            tableBody.innerHTML = ""; // Clear existing rows

            accounts.forEach(account => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${account.id}</td>
                    <td>${account.username}</td>
                    <td>${account.email}</td>
                    <td>${account.role}</td>
                    <td class="actions">
                        <button class="edit-btn" onclick="editAccount(${account.id})">Edit</button>
                        <button class="delete-btn" onclick="deleteAccount(${account.id})">Delete</button>
                    </td>
                `;
                tableBody.appendChild(row);
            });
        } catch (error) {
            console.error("Error fetching accounts:", error);
        }
    }

    // Add account functionality
    addAccountBtn.addEventListener("click", () => {
        alert("Redirecting to Add Account Form...");
        window.location.href = "add_account.html"; // Redirect to add account page
    });

    // Edit account functionality
    window.editAccount = function (id) {
        alert(`Redirecting to Edit Account Form for Account ID: ${id}`);
        window.location.href = `edit_account.html?id=${id}`; // Redirect to edit account page
    };

    // Delete account functionality
    window.deleteAccount = async function (id) {
        if (confirm("Are you sure you want to delete this account?")) {
            try {
                const response = await fetch(`/api/accounts/${id}`, {
                    method: "DELETE",
                });
                if (!response.ok) throw new Error("Failed to delete account");

                alert("Account deleted successfully!");
                fetchAccounts(); // Refresh table
            } catch (error) {
                console.error("Error deleting account:", error);
            }
        }
    };

    // Initial fetch
    fetchAccounts();
});
