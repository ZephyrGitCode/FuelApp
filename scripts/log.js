/*
if(count != 0 || localStorage.length == 0){
  var empty = document.createElement('p');
  empty.innerHTML = "No fuel entries";
  document
    .querySelector('.logtable')
    .appendChild(empty);
};
*/



for(var i = 20; i >= 0; i--){

  var data = JSON.parse(localStorage.getItem(i));
  if(data != null && "total" in data){
    var cost = document.createElement('td');
    var litres = document.createElement('td');
    var date = document.createElement('td');
    var odo = document.createElement('td');

    cost.innerHTML = "$"+data["total"];
    litres.innerHTML = data["fuel"]+"L";
    date.innerHTML = "Date: " + data["date"];
    odo.innerHTML = "ODO: " + data["odo"];

    var deleteRow = document.createElement('td');
    var deleteButton = document.createElement('button');
    deleteButton.setAttribute('class', 'delbtn');
    deleteButton.innerHTML = 'Delete';

    deleteButton.dataset.key = i;

    console.log("key is ", i);

    deleteButton.addEventListener('click', deleteClicked, false);
    deleteRow.appendChild(deleteButton);

    var row = document.createElement('tr');
    var nextrow = document.createElement('tr');

    var line = document.createElement('hr');

    row.appendChild(date)
    row.appendChild(odo)
    row.appendChild(deleteRow);

    nextrow.appendChild(cost);
    nextrow.appendChild(litres);

    document
      .querySelector('.logtable')
      .appendChild(row);

    document
      .querySelector('.logtable')
      .appendChild(nextrow);

    document
      .querySelector('.logtable')
      .appendChild(line);
  }
};


function deleteClicked(evt) {

  var key = parseInt(evt.target.dataset.key);
  var count = key;

  for(var i=key; i < localStorage.length; i++) {
    if(localStorage.getItem(i+1) != null){
      var data = localStorage.getItem(i+1);
      localStorage.setItem(i,data);
    }
    count+=1;
  }
  localStorage.removeItem(count);
  window.location.replace("index.html");

  };
