for(var i = 1; i < (localStorage.length + 1); i++) {
  var data = JSON.parse(localStorage.getItem(i));
  var cost = document.createElement('td');
  var litres = document.createElement('td');
  var date = document.createElement('td');
  var odo = document.createElement('td');

  cost.innerHTML = "$"+data["total"];
  litres.innerHTML = data["fuel"]+"L";
  date.innerHTML = "Date: " + data["date"];
  odo.innerHTML = "ODO: " + data["odo"];
  var row = document.createElement('tr');
  var nextrow = document.createElement('tr');

  row.appendChild(date)
  row.appendChild(odo)

  nextrow.appendChild(cost);
  nextrow.appendChild(litres);

  document
    .querySelector('.logtable')
    .appendChild(row);

  document
    .querySelector('.logtable')
    .appendChild(nextrow);

  var options = {body: 'Do you like my body?', vibrate: [200, 100, 200]}


  Notification.requestPermission()
    .then((response) => {
    if (response === 'granted'){
      var n = new Notification('Test notification',options);
    }
  });


};



function showRow(key, value) {
  var keyCell = document.createElement('td');
  keyCell.innerHTML = key;
  var valueCell = document.createElement('td');
  valueCell.innerHTML = value;
  var deleteRow = document.createElement('td');
  var deleteButton = document.createElement('button');
  deleteButton.class = 'delBtn';
  deleteButton.innerHTML = 'delete';
  deleteButton.dataset.key = key;
  deleteButton.addEventListener('click', deleteClicked);
  deleteRow.appendChild(deleteButton);
  var row = document.createElement('tr');
  row.appendChild(keyCell);
  row.appendChild(valueCell);
  row.appendChild(deleteRow);

  document
    .querySelector('.outputTable')
    .appendChild(row);
  return row;
};

document
  .getElementById('delBtn')
  .addEventListener('click', deleteClicked);

function deleteClicked(evt) {
  localStorage.clear();

  /*
  var key = evt.target.dataset.key;
  var sKeyR = localStorage.key(3);
  console.log(sKeyR)
  localStorage.remove();
  */
};

/* Waiting for event trigger
document
  .getElementById('saveBtn')
  .addEventListener('click', saveDataClicked);

document
  .getElementById('loadBtn')
  .addEventListener('click', loadDataClicked);

document
  .getElementById('delBtn')
  .addEventListener('click', deleteClicked);
*/
