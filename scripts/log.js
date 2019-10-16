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
    date.innerHTML = data["date"];
    odo.innerHTML = data["odo"];
    cost.innerHTML = "$"+data["total"];
    litres.innerHTML = data["fuel"]+"L";

    // Adds a delete button for each entry
    var deleteRow = document.createElement('td');
    var deleteButton = document.createElement('button');
    deleteButton.setAttribute('class', 'delbtn');
    deleteButton.innerHTML = 'Delete';

    deleteButton.dataset.key = i;

    deleteButton.addEventListener('click', deleteClicked, false);
    deleteRow.appendChild(deleteButton);

    // Appends information to a table for each local storage value
    var rowone = document.createElement('tr');
    var rowtwo = document.createElement('tr');
    var rowthree = document.createElement('tr');
    var rowfour = document.createElement('tr');
    var rowfive = document.createElement('tr');

    // creates vertical lines
    var vline1 = document.createElement('td');
    vline1.setAttribute('id', 'vl');
    var vline2 = document.createElement('td');
    vline2.setAttribute('id', 'vl');
    var vline3 = document.createElement('td');
    vline3.setAttribute('id', 'vl');
    var vline4 = document.createElement('td');
    vline4.setAttribute('id', 'vl');

    // Addes a line underneath each entry
    var line = document.createElement('hr');

    // left side table data
    var datetext = document.createElement('td');
    datetext.innerHTML = "Date"
    var odotext = document.createElement('td');
    odotext.innerHTML = "ODO"
    var costtext = document.createElement('td');
    costtext.innerHTML = "Cost"
    var litrestext = document.createElement('td');
    litrestext.innerHTML = "Litres"

    // Top row - date
    rowone.appendChild(datetext);
    rowone.appendChild(vline1);
    rowone.appendChild(date);

    // Second row - ODO
    rowtwo.appendChild(odotext);
    rowtwo.appendChild(vline2);
    rowtwo.appendChild(odo);

    // Third row - Cost
    rowthree.appendChild(costtext);
    rowthree.appendChild(vline3);
    rowthree.appendChild(cost);

    // Fourth row - Litres
    rowfour.appendChild(litrestext);
    rowfour.appendChild(vline4);
    rowfour.appendChild(litres);

    rowfive.appendChild(deleteRow);

    // finds the table, and appends each row
    document
      .querySelector('.logtable')
      .appendChild(rowone);

    document
      .querySelector('.logtable')
      .appendChild(rowtwo);

    document
      .querySelector('.logtable')
      .appendChild(rowthree);

    document
      .querySelector('.logtable')
      .appendChild(rowfour);

    document
      .querySelector('.logtable')
      .appendChild(rowfive);

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
