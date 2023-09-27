// Get all the icons in the start bar
var icons = document.querySelectorAll(".start li i");

// Add a click event listener to each icon
icons.forEach(function (icon) {
  icon.addEventListener("click", function () {
    // Toggle the 'icon-active' class on the clicked icon
    icons.forEach(function (inactiveIcon) {
      inactiveIcon.classList.remove("icon-active");
      inactiveIcon.parentElement.classList.remove("li-active");
    });

    this.classList.toggle("icon-active");
    this.parentElement.classList.add("li-active");
  });
});
