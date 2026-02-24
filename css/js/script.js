// Page loaded message
console.log("Day 2 - Button Component System Loaded");

// Select all buttons
const buttons = document.querySelectorAll(".btn");

// Add click event to each button
buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    if (!button.disabled) {
      console.log("Button clicked:", button.innerText);
    }
  });
});
