// Function to show specific sections while keeping the sidebar visible
function showSection(section) {
    // Hide all sections
    document.querySelectorAll('.content-section').forEach(sec => {
        sec.style.display = 'none';
    });

    // Show the selected section
    const activeSection = document.getElementById(section);
    if (activeSection) {
        activeSection.style.display = 'block';
    }

    // Ensure sidebar remains visible
    document.querySelector('.sidebar').style.display = 'block';
}

// Function to dynamically generate session cards with full background color
function generateSessionCards() {
    const sessionCardsContainer = document.getElementById('session-cards-container');
    const sessions = [
        { title: "Session 1", date: "March 18, 2025", progress: "Completed", link: "session1.html" },
        { title: "Session 2", date: "March 19, 2025", progress: "In Progress", link: "session2.html" },
        { title: "Session 3", date: "April 5, 2025", progress: "Upcoming", link: "#" },
        { title: "Session 4", date: "April 12, 2025", progress: "Upcoming", link: "#" },
        { title: "Session 5", date: "April 19, 2025", progress: "Upcoming", link: "#" },
        { title: "Session 6", date: "April 26, 2025", progress: "Upcoming", link: "#" },
        { title: "Session 7", date: "May 3, 2025", progress: "Upcoming", link: "#" },
        { title: "Session 8", date: "May 10, 2025", progress: "Upcoming", link: "#" },
        { title: "Session 9", date: "May 17, 2025", progress: "Upcoming", link: "#" },
        { title: "Session 10", date: "May 24, 2025", progress: "Upcoming", link: "#" },
        { title: "Session 11", date: "May 31, 2025", progress: "Upcoming", link: "#" },
        { title: "Session 12", date: "June 7, 2025", progress: "Upcoming", link: "#" }
    ];

    // Clear previous content to prevent duplicates
    sessionCardsContainer.innerHTML = '';

    sessions.forEach(session => {
        let cardColor;
        if (session.progress === "Completed") {
            cardColor = "bg-success text-white"; // Full Green for Completed
        } else if (session.progress === "In Progress") {
            cardColor = "bg-warning text-dark"; // Full Yellow for In Progress
        } else {
            cardColor = "bg-secondary text-white"; // Full Gray for Upcoming
        }

        const card = document.createElement('div');
        card.className = 'col-md-4 mb-4';
        card.innerHTML = `
            <div class="card shadow-lg">
                <a href="${session.link}" class="card-link text-decoration-none">
                    <div class="card-body ${cardColor} rounded">
                        <h5 class="card-title">${session.title}</h5>
                        <p class="card-text">Date: ${session.date}</p>
                        <p class="card-text">Progress: ${session.progress}</p>
                    </div>
                </a>
            </div>
        `;
        sessionCardsContainer.appendChild(card);
    });
}

// Call the function to populate session cards on page load
document.addEventListener("DOMContentLoaded", function () {
    generateSessionCards();
});
