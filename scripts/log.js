for(var i = 1000; i > 0; i--) {
  var data = JSON.parse(localStorage.getItem(i));
  if(data != null){
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
    deleteButton.setAttribute('class', 'btn');
    deleteButton.innerHTML = 'Delete';

    deleteButton.dataset.key = localStorage.key(i - 1);

    deleteButton.addEventListener('click', deleteClicked);

    deleteRow.appendChild(deleteButton);

    var row = document.createElement('tr');
    var nextrow = document.createElement('tr');

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
  }
};
/*
Notification.requestPermission()
  .then((response) => {
  if (response === 'granted'){
    var n = new Notification('Test notification',options);
    n.vibrate
  }
*/

document
  .getElementById('delBtn')
  .addEventListener('click', deleteClicked);

  function deleteClicked(evt) {
    /*
    localStorage.clear();
    */
    var key = evt.target.dataset.key;
    console.log(key);
    for(var i=key; i < localStorage.length+1; i++) {
      console.log(i);
      console.log(localStorage.length);
      if(localStorage.getItem(i+1) != null){
        var data = localStorage.getItem(i+1);
        console.log('data is: ',data);
        localStorage.setItem(i,data);
      }
    }
    localStorage.removeItem(localStorage.length);
    window.location.replace("index.html");
  };
