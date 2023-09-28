// Initial start ups of the app
// Menu start up
let menu = document.getElementById("start").firstElementChild;
menu.firstElementChild.classList.toggle("icon-active");
menu.classList.add("li-active");

//color setup
let page_color = document.querySelectorAll("#colors li")[1];
page_color.classList.add("li-active");

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
      var chosen_bar = document.querySelector(
        `#${inactiveList.firstElementChild.innerHTML}`
      );
      chosen_bar.style.display = "none";
    });

    this.firstElementChild.classList.toggle("icon-active");
    this.classList.add("li-active");

    var chosen_bar = document.querySelector(
      `#${this.firstElementChild.innerHTML}`
    );
    chosen_bar.style.display = "flex";

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
    document.documentElement.style.setProperty(
      "--third-color",
      this.firstElementChild.style.backgroundColor
    );
    this.classList.add("li-active");
  });
});

// _________________________________________________________________________________________________________________________________________
// _________________________________________________________________________________________________________________________________________
// _________________________________________________________________________________________________________________________________________
// _________________________________________________________________________________________________________________________________________
// _________________________________________________________________________________________________________________________________________
// _________________________________________________________________________________________________________________________________________
window.addEventListener("resize", function () {
  const navBar = document.getElementById("nav-bar");
  const mainContent = document.getElementById("main_content");

  // Calculate the percentage of the current window width relative to the screen's width
  const widthPercentage = (window.innerWidth / screen.width) * 100;

  // Set a threshold percentage, e.g., 70%. Adjust this value as needed.
  const thresholdPercentage = 60;

  if (widthPercentage <= thresholdPercentage) {
    document.getElementById("nav-bar").style.left = "-250px";
    // setTimeout(() => {
    //   document.getElementById("nav-bar").style.display = "none";
    // }, 100);
    mainContent.style.left = "0";
    mainContent.style.width = "100%";
  } else {
    document.getElementById("nav-bar").style.left = "0px";
    // document.getElementById("nav-bar").style.display = "block";
    // setTimeout(() => {
    //   document.getElementById("nav-bar").style.left = "0px";
    // }, 500);
    mainContent.style.left = "250px";
    mainContent.style.width = "calc(100% - 250px)";
  }
});

// Call the resize function once to handle cases where the page is loaded in a shrunk form
