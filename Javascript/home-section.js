// Text to type
const text = "We are launching a brand new SIM card: SP Fusion. Stay connected like never before!";
const typewriterElement = document.getElementById('typewriter-text');

let index = 0;

function typeText() {
    if (index < text.length) {
        typewriterElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeText, 100); // Delay of 100ms between each character
    }
}

// Start typing when the page loads
window.onload = function() {
    typeText();
};
