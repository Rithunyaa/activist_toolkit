// These are the four facts that the button can choose from.
const facts = [
    "Light pollution makes it harder to see stars because artificial light brightens the night sky.",
    
    "Artificial light at night can disrupt the natural behaviors of animals, including migration, feeding, and reproduction.",
    
    "Too much artificial light can waste energy when lights are left on even when they are not needed.",
    
    "Reducing unnecessary outdoor lighting can help create darker skies where more stars and other celestial objects can be seen."
];

// Find the button and the place where the fact will appear.
const button = document.getElementById("myButton");
const fact = document.getElementById("fact");

// When the button is clicked, pick a random fact and display it.
button.addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * facts.length);

    fact.textContent = facts[randomIndex];
});
