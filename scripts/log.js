// Dynamically list all fuel entries into log
for(var i = 20; i >= 0; i--){

  // Checks data in the latest 20 entries
  var data = JSON.parse(localStorage.getItem(i));
  if(data != null && "total" in data){
    var cost = document.createElement('td');
    var litres = document.createElement('td');
    var date = document.createElement('td');
    var odo = document.createElement('td');

    // Writes the information to the page
    cost.innerHTML = "$"+data["total"];
    litres.innerHTML = data["fuel"]+"L";
    date.innerHTML = "Date: " + data["date"];
    odo.innerHTML = "ODO: " + data["odo"];

    // Adds a delete button for each entry
    var deleteRow = document.createElement('td');
    var deleteButton = document.createElement('button');
    deleteButton.setAttribute('class', 'delbtn');
    deleteButton.innerHTML = 'Delete';

    deleteButton.dataset.key = i;

    deleteButton.addEventListener('click', deleteClicked, false);
    deleteRow.appendChild(deleteButton);

    // Appends information to a table for each local storage value
    var row = document.createElement('tr');
    var nextrow = document.createElement('tr');

    var line = document.createElement('hr');

    row.appendChild(date)
    row.appendChild(odo)
    row.appendChild(deleteRow);

    nextrow.appendChild(cost);
    nextrow.appendChild(litres);

    // finds the table in the html to append to
    document
      .querySelector('.logtable')
      .appendChild(row);

    document
      .querySelector('.logtable')
      .appendChild(nextrow);

    document
      .querySelector('.logtable')
      .appendChild(line);
  };
};


function deleteClicked(evt) {

  var key = parseInt(evt.target.dataset.key);
  var count = key;

  for(var i=key; i < localStorage.length; i++) {
    if(localStorage.getItem(i+1) != null){
      var data = localStorage.getItem(i+1);
      localStorage.setItem(i,data);
    };
    count+=1;
  };
  localStorage.removeItem(count);
  window.location.replace("index.html");

  };
