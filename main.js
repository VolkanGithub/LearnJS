// Array of JavaScript facts
const jsFacts = [
    "JavaScript was created in 10 days by Brendan Eich in 1995.",
    "JavaScript is not related to Java, despite the similar name.",
    "The official name of JavaScript is ECMAScript.",
    "JavaScript can be used for both front-end and back-end development.",
    "JavaScript is a multi-paradigm language, supporting event-driven, functional, and imperative programming styles."
];

// Function to get a random fact
function getRandomFact() {
    const randomIndex = Math.floor(Math.random() * jsFacts.length);
    return jsFacts[randomIndex];
}

// Function to display a fact
function displayFact() {
    const factDisplay = document.getElementById('factDisplay');
    factDisplay.textContent = getRandomFact();
}

// Add click event listener to the button
document.getElementById('factButton').addEventListener('click', displayFact);