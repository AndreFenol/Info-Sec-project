document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const sidebar = document.getElementById("sidebar");
    const mainContent = document.querySelector(".main-content");

    // Sidebar toggle
    menuToggle.addEventListener("click", () => {
        sidebar.classList.toggle("collapsed");
        mainContent.classList.toggle("expanded");
    });

    // Fetch dashboard data
    async function fetchDashboardData() {
        try {
            const response = await fetch('/api/dashboard-data'); // Replace with your backend endpoint
            if (!response.ok) throw new Error("Failed to fetch dashboard data");

            const data = await response.json();

            // Update metrics
            document.getElementById("posts-published").innerText = data.postsPublished || 0;
            document.getElementById("new-comments").innerText = data.newComments || 0;
            document.getElementById("registered-members").innerText = data.registeredMembers || 0;

            // Update charts dynamically
            updateCharts(data.chartData);
        } catch (error) {
            console.error("Error fetching dashboard data:", error);
        }
    }

    // Chart initialization
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

        const commentCtx = document.getElementById("commentChart").getContext("2d");
        new Chart(commentCtx, {
            type: "bar",
            data: {
                labels: chartData.comments.labels || [],
                datasets: [{
                    label: "Comments",
                    data: chartData.comments.data || [],
                    backgroundColor: "#007bff"
                }]
            }
        });
    }

    // Fetch data on load
    fetchDashboardData();
});
