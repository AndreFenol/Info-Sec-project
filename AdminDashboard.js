document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const sidebar = document.getElementById("sidebar");
    const mainContent = document.querySelector(".main-content");

    // Sidebar toggle
    menuToggle.addEventListener("click", () => {
        sidebar.classList.toggle("collapsed");
        mainContent.classList.toggle("expanded");
    });

    // Function to fetch dashboard data
    async function fetchDashboardData() {
        try {
            const response = await fetch('/api/dashboard-data'); // Replace with your backend API endpoint
            if (!response.ok) throw new Error("Failed to fetch dashboard data");

            const data = await response.json();

            // Update stats
            document.getElementById("orders-completed").innerText = data.ordersCompleted || 0;
            document.getElementById("new-orders").innerText = data.newOrders || 0;
            document.getElementById("members-count").innerText = data.members || 0;

            // Optional: Update charts dynamically
            updateCharts(data.chartData);
        } catch (error) {
            console.error("Error fetching dashboard data:", error);
        }
    }

    // Example function to update charts (if needed)
    function updateCharts(chartData) {
        const trafficCtx = document.getElementById("trafficChart").getContext("2d");
        new Chart(trafficCtx, {
            type: "line",
            data: {
                labels: chartData.traffic.labels || [],
                datasets: [{
                    label: "Traffic",
                    data: chartData.traffic.data || [],
                    borderColor: "#4c0b0b",
                    backgroundColor: "rgba(76, 11, 11, 0.2)",
                    fill: true
                }]
            }
        });

        const demographicsCtx = document.getElementById("demographicsChart").getContext("2d");
        new Chart(demographicsCtx, {
            type: "pie",
            data: {
                labels: chartData.demographics.labels || [],
                datasets: [{
                    label: "Users",
                    data: chartData.demographics.data || [],
                    backgroundColor: ["#007bff", "#dc3545", "#ffc107"]
                }]
            }
        });
    }

    // Initial data fetch
    fetchDashboardData();
});
