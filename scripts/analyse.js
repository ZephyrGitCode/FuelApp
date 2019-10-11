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
  const odomath = [];

  var select = document.getElementById('datedrop').value;

  for(var i = 1; i < localStorage.length+1; i++) {
    var data = JSON.parse(localStorage.getItem(i));

    if(data != null && (new Date(data["date"]).getMonth()) == select){
      if(data["total"] != ""){
        costtotal+=parseInt(data["total"]);
      };
      if(data["fuel"] != ""){
        litrestotal+=parseInt(data["fuel"]);
      };
      if(data["odo"] != ""){ // !(isNaN())){
        console.log(data["odo"]);
        console.log(isNaN());
        odomath.push(parseInt(data["odo"]));
      };

    };
  };

  document.getElementById("c").innerHTML = "$"+costtotal;
  document.getElementById("t").innerHTML = litrestotal+"L";
  document.getElementById("o").innerHTML = 0+"km";

  console.log(odomath);
  if(odomath.length != 0){
    var maxodo = Math.max(...odomath);
    console.log(maxodo);
    var minodo = Math.min(...odomath);
    console.log(minodo);
    if(maxodo === minodo){
      var calcodo = maxodo;
    }else{
      var calcodo = maxodo-minodo;
    };
    document.getElementById("o").innerHTML = calcodo+"km";
  };
};

document.getElementById('datedrop').addEventListener('click', choosedate);
