// Dynammically update date
const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];
var d = new Date();
var n = d.getMonth();


document.querySelector(".reminderform").addEventListener('submit', submitentry);

function submitentry(evt) {
  evt.preventDefault();

  var title = document.getElementById('title').value;
  var desc = document.getElementById('desc').value;
  var date = document.getElementById('date').value;

  var entrykey = (localStorage.length + 1);

  var entrydata = {};

  var inputs = document.querySelectorAll('.reminderform input');
  for(var i = 0; i < inputs.length; i++) {
    if(inputs[i].type == 'date')
      {
        entrydata[inputs[i].id] = inputs[i].value;
      };
  };
  var saveinputs = JSON.stringify(entrydata);

  var count = 1
  for(var i = localStorage.length; i >= 0; i--) {
  var checkingdata = JSON.parse(localStorage.getItem(localStorage.key(i)));
    if(checkingdata != null){// && !("total" in checkingdata)){
    count+=1
  }
}
  //var data = JSON.parse(localStorage.getItem(localStorage.key(count)));

  localStorage.setItem("r"+(count), saveinputs);
  window.location.replace("../index.html");
};
