// Default to today's date
document.querySelector("#date").valueAsDate = new Date();

// Dynammically update date based on current date
const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];
var d = new Date();
var n = d.getMonth();

// event listener on submit button
document.querySelector(".reminderform").addEventListener('submit', submitentry);

// save reminder function
function submitentry(evt) {
  evt.preventDefault();

  var title = document.getElementById('title').value;
  var desc = document.getElementById('desc').value;
  var date = document.getElementById('date').value;

  var entrykey = (localStorage.length + 1);

  var entrydata = {};

  var inputs = document.querySelectorAll('.reminderform input');
  for(var i = 0; i < inputs.length; i++) {
    if(inputs[i].type !== 'button' && inputs[i].type !=='submit')
      {
        entrydata[inputs[i].id] = inputs[i].value;
      };
  };

  // Saving inputs as data and (length of total keys + 1) for the key
  var saveinputs = JSON.stringify(entrydata);
  var totalkeys = localStorage.length

  localStorage.setItem(totalkeys + 1, saveinputs);
  window.location.replace("../index.html");
};
