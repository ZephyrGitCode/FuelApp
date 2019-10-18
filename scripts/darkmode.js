// Remembers the current active mode in session storage
if(localStorage.getItem(0,currentClass) === "light-mode"){
  var body = document.getElementById("body");
  var currentClass = body.className;
  body.className = "dark-mode";
  console.log(localStorage.getItem(0,currentClass));
} else if(localStorage.getItem(0,currentClass) === "dark-mode"){
  var body = document.getElementById("body");
  var currentClass = body.className;
  body.className = currentClass = "light-mode";
  console.log("othermode")
}

// Original code found at "https://codepen.io/HarlemSquirrel/pen/NdMebZ" By Kevin McCormack
document.getElementById("darkbtn").addEventListener("click", modeswap)
function modeswap(evt) {
  var body = document.getElementById("body");
  var currentClass = body.className;
  console.log(currentClass)
  localStorage.setItem(0,currentClass);
  body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
};
