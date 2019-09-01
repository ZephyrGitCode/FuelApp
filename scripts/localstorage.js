/**
* Save data from the form to storage
* @param {Event} evt Click event
* @return {undefined} No return value
**/
function saveDataClicked(evt) {
  evt.preventDefault();

  var myKey = document.getElementById('keyInput').value;
  var myValue = document.getElementById('valueInput').value;
  localStorage.setItem(myKey, myValue);
}

/**
* Load data from storage and show in the table
* @param {Event} evt Click event
* @return {undefined} No return value
**/
function loadDataClicked(evt) {
  evt.preventDefault();
  document
    .querySelector('.outputTable')
    .innerHTML = '';

  // Write code here
  var sKey = localStorage.key(4);
  console.log(sKey)
  var sValue = localStorage.getItem(sKey);
  document.getElementById('keyInput').value = sKey
  document.getElementById('valueInput').value = sValue;
}

function deleteClicked(evt) {
  var key = evt.target.dataset.key;

  // Write code here
  var sKeyR = localStorage.key(3);
  console.log(sKeyR)
  localStorage.remove();
}

/**
* Add a new row to the output table
* @param {string} key The key value to show
* @param {string} value The value to show
* @return {Element} The table row object
**/
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
}

document
  .getElementById('saveBtn')
  .addEventListener('click', saveDataClicked);

document
  .getElementById('loadBtn')
  .addEventListener('click', loadDataClicked);

document
  .getElementById('delBtn')
  .addEventListener('click', deleteClicked);
