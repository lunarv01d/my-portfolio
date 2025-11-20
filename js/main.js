
const contactButton = document.getElementById("contact-btn");
const emailDisplay = document.getElementById("email-display");


contactButton.addEventListener("click", function() {
    

    emailDisplay.textContent = "rylan.hughey@ttu.edu"; // Change this!
    contactButton.textContent = "Show Email";
});
const toggleButton = document.getElementById("toggle-btn");
const interestsList = document.getElementById("interests-list");


toggleButton.addEventListener("click", function() {


    interestsList.classList.toggle("hidden");
});