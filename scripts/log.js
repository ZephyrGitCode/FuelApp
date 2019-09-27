/*
if(count != 0 || localStorage.length == 0){
  var empty = document.createElement('p');
  empty.innerHTML = "No fuel entries";
  document
    .querySelector('.logtable')
    .appendChild(empty);
};
*/

/*
for ( var i = 0, len = localStorage.length; i < len; ++i ) {
  //console.log( localStorage.getItem( localStorage.key( i ) ) );
  console.log("this is the index", localStorage.key(i));
}
*/

//for(var i = localStorage.length; i >= 0; i--) {
//for(var i = 0; i < localStorage.length; i++)

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

    deleteButton.dataset.key = i; //localStorage.key(i)

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
/*
Notification.requestPermission()
  .then((response) => {
  if (response === 'granted'){
    var n = new Notification('Test notification',options);
    n.vibrate
  }
*/
/*
function deleteClicked(evt) {

    //localStorage.clear();

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
  */

  function deleteClicked(evt) {

    //localStorage.clear();

    var key = parseInt(evt.target.dataset.key);
    var count = key;

    for(var i=key; i < localStorage.length; i++) {
      console.log("localStorage.getItem(i+1)",localStorage.getItem(i+1))
      if(localStorage.getItem(i+1) != null){// && "total" in JSON.parse(localStorage.getItem(i))){
        var data = localStorage.getItem(i+1);
        localStorage.setItem(i,data);
      }
      count+=1;
    }
    localStorage.removeItem(count);
    window.location.replace("index.html");

    /*

    deletelast(localStorage.length+1)
    function deletelast(passedkey){
      var deldata = JSON.parse(localStorage.getItem(passedkey));
      console.log("deleting data", deldata);
      if(deldata != null){// && "total" in deldata){
        localStorage.removeItem(passedkey);
        }
      else if (deldata == null) {return console.log("nothing happend",passedkey)}
        else{deletelast(passedkey-1)}
      };
      */

  };
