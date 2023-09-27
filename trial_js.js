// Get all the lists in the start bar
var lists = document.querySelectorAll(".start li");

// Add a click event listener to each list
lists.forEach(function (list) {
  list.addEventListener("click", function () {
    // Toggle the 'list-active' class on the clicked list
    lists.forEach(function (inactivelist) {
      inactivelist.firstElementChild.remove("icon-active");
      inactivelist.classList.remove("li-active");
    });

    this.firstElementChild.toggle("icon-active");
    this.classList.add("li-active");

    // if (parent.lastElementChild == this) {
    //   console.log("hey");
    // } else if (parent.firstElementChild == this) {
    //   console.log("hi");
    // }
  });
});
