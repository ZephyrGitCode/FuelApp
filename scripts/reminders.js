// Dynamically list all fuel entries into log
function reminderlog(evt) {
  for(var i = localStorage.length; i >= 0; i--){

    // Checks data in the latest 20 entries
    var data = JSON.parse(localStorage.getItem(i));
    if(data != null && "title" in data){
      var date = document.createElement('td');
      var title = document.createElement('td');
      var desc = document.createElement('td');
      desc.setAttribute('style', 'max-width: 50px; overflow: scroll;');

      // Writes the information to the page
      var thisdate = new Date(data["date"])
      date.innerHTML = `${thisdate.getDate()}/${thisdate.getMonth()}/${thisdate.getFullYear()}`;
      title.innerHTML = data["title"];
      desc.innerHTML = data["desc"];

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
      var rowfive = document.createElement('tr');

      // creates vertical lines
      var vline1 = document.createElement('td');
      vline1.setAttribute('id', 'vl');
      var vline2 = document.createElement('td');
      vline2.setAttribute('id', 'vl');
      var vline3 = document.createElement('td');
      vline3.setAttribute('id', 'vl');

      // Addes a line underneath each entry
      var line = document.createElement('hr');

      // left side table data
      var datetext = document.createElement('td');
      datetext.innerHTML = "Date"
      var titletext = document.createElement('td');
      titletext.innerHTML = "Title"
      var desctext = document.createElement('td');

      desctext.innerHTML = "Desc"

      // First row - Title
      rowone.appendChild(titletext);
      rowone.appendChild(vline2);
      rowone.appendChild(title);

      // Second row - Description
      rowtwo.appendChild(desctext);
      rowtwo.appendChild(vline3);
      rowtwo.appendChild(desc);


      // Third row - Date
      rowthree.appendChild(datetext);
      rowthree.appendChild(vline1);
      rowthree.appendChild(date);


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
        .appendChild(rowfive);

      document
        .querySelector('.logtable')
        .appendChild(line);
    };
  };
};

reminderlog();

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
  window.location.replace("reminders.html");
  };
