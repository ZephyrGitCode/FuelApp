document.querySelector(".entryform").addEventListener('submit', submitentry);

function calctotal(){
  var fuelvalue = document.getElementById('fuel').value
  if(fuelvalue != "" || fuelvalue != 0){
    var currentcost = document.getElementById('cost').value;
    totalcalc = document.getElementById('fuel').value * currentcost
    document.getElementById('total').value = totalcalc
  }
}

function submitentry(evt) {
  evt.preventDefault();

  var odo = document.getElementById('odo').value;
  var fuel = document.getElementById('fuel').value;
  var cost = document.getElementById('cost').value;
  var total = document.getElementById('total').value;
  var date = document.getElementById('date').value;

  var entrykey = (localStorage.length + 1);

  var entrydata = {};
  var inputs = document.querySelectorAll('.entryform input');
  for(var i = 0; i < inputs.length; i++) {
    if(inputs[i].type !== 'button' && inputs[i].type !=='submit')
      {
        entrydata[inputs[i].id] = inputs[i].value;
      };
  };
  var saveinputs = JSON.stringify(entrydata);
  var totalkeys = localStorage.length
  localStorage.setItem(totalkeys + 1, saveinputs);
  window.location.replace("../index.html");
};
