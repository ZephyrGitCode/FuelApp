// Remembers the current active mode in session storage
if(sessionStorage.getItem(1,currentClass) === "light-mode"){
  var body = document.getElementById("body");
  var currentClass = body.className;
  body.className = currentClass == "dark-mode";
}

if(sessionStorage.getItem(1,currentClass) === "dark-mode"){
  var body = document.getElementById("body");
  var currentClass = body.className;
  body.className = currentClass == "light-mode";
}

// Original code found at "https://codepen.io/HarlemSquirrel/pen/NdMebZ" By Kevin McCormack
document.getElementById("darkbtn").addEventListener("click", modeswap)
function modeswap(evt) {
  var body = document.getElementById("body");
  var currentClass = body.className;
  console.log(currentClass)
  sessionStorage.setItem(1,currentClass);
  body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
};
