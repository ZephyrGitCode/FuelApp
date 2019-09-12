for(var i = 1; i < (localStorage.length + 1); i++) {
  var data = JSON.parse(localStorage.getItem(i));
  var cost = document.createElement('td');
  console.log("$"+data["total"]);

  cost.innerHTML = "$"+data["total"];
  var row = document.createElement('tr');
  row.appendChild(cost);
  
  document
    .querySelector('.logtable')
    .appendChild(row);
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

function deleteClicked(evt) {
  var key = evt.target.dataset.key;


  var sKeyR = localStorage.key(3);
  console.log(sKeyR)
  localStorage.remove();
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
