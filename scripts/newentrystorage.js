// Defaults new entry date to current day
document.querySelector("#date").valueAsDate = new Date();
document.querySelector(".entryform").addEventListener('submit', submitentry);

// Calculates the total field based on price per litre and fuel litres
function calctotal(){
  var fuelvalue = document.getElementById('fuel').value
  if(fuelvalue != "" || fuelvalue != 0){
    var currentcost = document.getElementById('cost').value;
    var totalcalc = document.getElementById('fuel').value * currentcost
    totalcalc = parseFloat(totalcalc).toFixed(2);
    console.log(totalcalc);
    document.getElementById('total').value = totalcalc
  }
};

// function to save new entry values into local storage
function submitentry(evt) {
  evt.preventDefault();

  var odo = document.getElementById('odo').value;
  var fuel = document.getElementById('fuel').value;
  var cost = document.getElementById('cost').value;
  var total = document.getElementById('total').value;
  var date = document.getElementById('date').value;

  // goes through each input and saves their values
  var entrydata = {};
  var inputs = document.querySelectorAll('.entryform input');
  for(var i = 0; i < inputs.length; i++) {
    if(inputs[i].type !== 'button' && inputs[i].type !=='submit')
      {
        entrydata[inputs[i].id] = inputs[i].value;
      };
  };

  // Saving inputs as data and (length of total keys + 1) for the key
  var saveinputs = JSON.stringify(entrydata);
  var totalkeys = localStorage.length

  // Save the new entry into local storage then reset the window
  localStorage.setItem(totalkeys + 1, saveinputs);
  //window.location.replace("../index.html");
  window.location.href = "../index.html"
};
