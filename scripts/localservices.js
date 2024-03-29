// Got inspiration from (How to create an accordion -> https://www.w3schools.com/howto/howto_js_accordion.asp)
// Adds event listener to open accordians
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");
    this.setAttribute("style","color: purple;");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
      if (localStorage.getItem(0,currentClass) === "dark-mode"){
        this.setAttribute("style","color: #000");
      }else if(localStorage.getItem(0,currentClass) === "dark-mode"){
        this.setAttribute("style","color: #ffffff");
      }
    } else {
      panel.style.display = "block";

    }
  });
}
