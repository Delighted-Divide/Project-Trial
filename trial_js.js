// Get all the lists in the start bar
var lists = document.querySelectorAll(".start li");

// Add a click event listener to each list
lists.forEach(function (list) {
  list.addEventListener("click", function () {
    // Toggle the 'list-active' class on the clicked list
    lists.forEach(function (inactiveList) {
      inactiveList.firstElementChild.classList.remove("icon-active");
      inactiveList.classList.remove("li-active");
    });

    this.firstElementChild.classList.toggle("icon-active");
    this.classList.add("li-active");

    if (this.parentElement.lastElementChild == this) {
      this.style.borderRight = "none";
      //   setTimeout(() => {
      //     this.style.borderRight = "none";
      //   }, 500);
    } else if (this.parentElement.firstElementChild == this) {
      this.style.borderLeft = "none";
      //   setTimeout(() => {
      //     this.style.borderLeft = "none";
      //   }, 10);
    }
  });
});
