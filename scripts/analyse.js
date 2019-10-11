// Dynammically update date
const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];
var d = new Date();
var n = d.getMonth();
document.getElementById("cm").innerHTML = monthNames[n];
document.getElementById('datedrop').value = n;
//for each local storage (already there)
//for each month if(current local storage data is within the speceific month)
//create a new div with totals of local storage(only if div doesn't exist)
//bunch of variables



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

  /*
  newtable = document.createElement('table');
  newtable.setAttribute("id", ".logtable");

  var cost = document.createElement('td');
  var litres = document.createElement('td');

  cost.innerHTML = "$"+costtotal;
  litres.innerHTML = litrestotal+"L";

  var row = document.createElement('tr');
  row.appendChild(cost);
  row.appendChild(litres);
  document
    .querySelector('.logtable')
    .appendChild(row);
};





/*
for(var ii=0; ii < monthNames.length; ii++){
  var currentmonth = new Date(data["date"]).getMonth();
  if currentmonth === ii

};
*/
