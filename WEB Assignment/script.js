// Get the dropdown element
const dropdown = document.getElementById("myDropdown");

// Add a click event listener to the button that opens the dropdown
document.getElementById("myButton").addEventListener("click", function() {
  dropdown.classList.toggle("show");
});

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    dropdown.classList.remove("show");
  }
}
// Get the element to animate
const box = document.getElementById("myBox");

// Add a click event listener to the box
box.addEventListener("click", function() {
  // Toggle the "animate" class to start or stop the animation
  this.classList.toggle("animate");
});