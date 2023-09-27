// Get all the icons in the start bar
var icons = document.querySelectorAll(".start li i");

// Add a click event listener to each icon
icons.forEach(function (icon) {
  icon.addEventListener("click", function () {
    // Toggle the 'icon-active' class on the clicked icon
    this.classList.toggle("icon-active");
  });
});
