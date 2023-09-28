// Initial start ups of the app
// Menu start up
let menu = document.getElementById("start").firstElementChild;
menu.firstElementChild.classList.toggle("icon-active");
menu.classList.add("li-active");

// _________________________________________________________________________________________________________________________________________
// _________________________________________________________________________________________________________________________________________
// _________________________________________________________________________________________________________________________________________
// _________________________________________________________________________________________________________________________________________
// _________________________________________________________________________________________________________________________________________
// _________________________________________________________________________________________________________________________________________
// _________________________________________________________________________________________________________________________________________

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
// _________________________________________________________________________________________________________________________________________
// _________________________________________________________________________________________________________________________________________
// _________________________________________________________________________________________________________________________________________
// _________________________________________________________________________________________________________________________________________
// _________________________________________________________________________________________________________________________________________
// _________________________________________________________________________________________________________________________________________

var color_lists = document.querySelectorAll("#colors li");
color_lists.forEach(function (list) {
  list.addEventListener("click", function () {
    color_lists.forEach(function (inactiveList) {
      inactiveList.classList.remove("li-active");
    });
    console.log(typeof this.firstElementChild.style.backgroundColor);
    document.documentElement.style.setProperty(
      "--third-color",
      this.firstElementChild.style.backgroundColor
    );
    this.classList.add("li-active");
  });
});
console.log(color_lists);
