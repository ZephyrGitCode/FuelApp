// Dynammically update date
const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];
var d = new Date();
var n = d.getMonth();

document.getElementById('datedrop').value = n;

choosedate()

function choosedate(evt) {
  var costtotal = 0;
  var litrestotal = 0;

  var select = document.getElementById('datedrop').value;

  for(var i = 1; i < localStorage.length+1; i++) {
    var data = JSON.parse(localStorage.getItem(i));

    if(data != null && (new Date(data["date"]).getMonth()) == select){
      if(data["total"] != ""){
        costtotal+=parseInt(data["total"]);
      }
      if(data["fuel"] != ""){
        litrestotal+=parseInt(data["fuel"]);
      }
    }
  };

  document.getElementById("c").innerHTML = "$"+costtotal;
  document.getElementById("t").innerHTML = litrestotal+"L";

};

document.getElementById('datedrop').addEventListener('click', choosedate);
