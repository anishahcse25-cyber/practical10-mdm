// Get elements
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const eventCards = document.querySelectorAll(".event-card");
const noEvents = document.getElementById("noEvents");


// Search and filter events
function filterEvents() {

    const searchText = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;

    let visibleEvents = 0;

    eventCards.forEach(function(card) {

        const eventName =
            card.querySelector("h3").textContent.toLowerCase();

        const category =
            card.getAttribute("data-category");

        const matchesSearch =
            eventName.includes(searchText);

        const matchesCategory =
            selectedCategory === "all" ||
            category === selectedCategory;

        if (matchesSearch && matchesCategory) {

            card.style.display = "block";
            visibleEvents++;

        } else {

            card.style.display = "none";
        }

    });


    // Show message if no event is found
    if (visibleEvents === 0) {
        noEvents.style.display = "block";
    } else {
        noEvents.style.display = "none";
    }
}


// Search event
searchInput.addEventListener("input", filterEvents);


// Filter event
categoryFilter.addEventListener("change", filterEvents);


// Registration modal
const registrationModal =
    document.getElementById("registrationModal");

const selectedEvent =
    document.getElementById("selectedEvent");


// Open registration
function openRegistration(eventName) {

    registrationModal.style.display = "flex";

    selectedEvent.textContent =
        "Registering for: " + eventName;

    document.getElementById("successMessage").textContent = "";
}


// Close registration
function closeRegistration() {

    registrationModal.style.display = "none";

    document.getElementById("registrationForm").reset();
}


// Submit registration
document
    .getElementById("registrationForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const name =
            document.getElementById("studentName").value;

        document.getElementById("successMessage").textContent =
            "Registration successful! Welcome, " + name + ".";

        // Clear form
        this.reset();
    });


// Close modal when clicking outside it
window.addEventListener("click", function(event) {

    if (event.target === registrationModal) {
        closeRegistration();
    }

});