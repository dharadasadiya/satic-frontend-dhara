const form = document.getElementById("searchForm");
const input = document.getElementById("searchInput");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  if (input.value.trim() === "") {
    alert("Please enter a search term.");
  } else {
    console.log("Searching for:", input.value);
  }
});
