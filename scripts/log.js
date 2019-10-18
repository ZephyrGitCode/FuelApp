// Script for the current month summary
function currentmonthsum(evt) {
  var costtotal = 0;
  var litrestotal = 0;
  const odomath = [];

  for(var i = 1; i < localStorage.length+1; i++) {
    var data = JSON.parse(localStorage.getItem(i));

    // Checking if localstorage is a new entry
    if(data != null && (new Date(data["date"]).getMonth()) == new Date().getMonth() && "total" in data){
      if(data["total"] != ""){
        costtotal+=parseInt(data["total"]);
      };
      if(data["fuel"] != ""){
        litrestotal+=parseInt(data["fuel"]);
      };
      if(data["odo"] != ""){
        odomath.push(parseInt(data["odo"]));
      };
    };
  };

  // Inserts the html into the table
  document.getElementById("c").innerHTML = "$"+costtotal;
  document.getElementById("t").innerHTML = litrestotal+"L";
  document.getElementById("o").innerHTML = 0+"km";

  if(odomath.length != 0){
    var maxodo = Math.max(...odomath);
    document.getElementById("o").innerHTML = maxodo+"km";
  };
};

currentmonthsum()

// Dynamically list all fuel entries into log
function fuellog(evt) {
  for(var i = localStorage.length; i >= 1; i--){

    // Checks data in the latest 20 entries
    var data = JSON.parse(localStorage.getItem(i));
    if(data != null && "total" in data){
      var date = document.createElement('td');
      date.setAttribute('style', 'padding-left:12%;');
      var odo = document.createElement('td');
      odo.setAttribute('style', 'padding-left:20%;;');
      var cost = document.createElement('td');
      cost.setAttribute('style', 'padding-left:20%;');
      var litres = document.createElement('td');
      litres.setAttribute('style', 'padding-left:20%;');

      // Writes the information to the page
      var thisdate = new Date(data["date"])
      date.innerHTML = `${thisdate.getDate()}/${thisdate.getMonth()+1}/${thisdate.getFullYear()}`;
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
      datetext.setAttribute('style', 'text-align: left;');
      var odotext = document.createElement('td');
      odotext.innerHTML = "ODO"
      odotext.setAttribute('style', 'text-align: left;');
      var costtext = document.createElement('td');
      costtext.innerHTML = "Cost"
      costtext.setAttribute('style', 'text-align: left;');
      var litrestext = document.createElement('td');
      litrestext.innerHTML = "Litres"
      litrestext.setAttribute('style', 'text-align: left;');

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

      //var emptytd = document.createElement('td');
      //var emptytd2 = document.createElement('td');
      //rowfive.appendChild(emptytd);
      //rowfive.appendChild(emptytd2);
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
};

fuellog();

// Function for when delete is clicked
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

  // Reloads the window
  window.location.href = "index.html";
  };
