console.log("Day 2 Loaded");

const buttons = document.querySelectorAll(".btn");

buttons.forEach(function(btn) {
  btn.addEventListener("click", function() {
    if (!btn.disabled) {
      console.log(btn.innerText + " button clicked");
    }
  });
});
