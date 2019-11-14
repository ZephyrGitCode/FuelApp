
// map view of surrounding things in search or on clicked parent

// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

var map;
var service;
var infowindow;

function initMap() {
  var pyrmont = new google.maps.LatLng(12.4634,130.8456);

  map = new google.maps.Map(document.getElementById('map'), {
      center: pyrmont,
      zoom: 15
    });

  var request = {
    location: pyrmont,
    radius: '200',
    type: ['restaurant']
  };

  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);
}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      var place = results[i];
      //createMarker(results[i]);
      console.log(results[i]);
    }
  }
}


/*
var map;
var service;
var infowindow;

function initMap() {
  var darwincity = new google.maps.LatLng(12.4634, 130.8456);
  var darwincaz = new google.maps.LatLng(12.3733, 130.8817);
  var palmo = new google.maps.LatLng(12.4785, 130.9852);

  //infowindow = new google.maps.InfoWindow();

  map = new google.maps.Map(
      document.getElementById('map'), {center: palmo, zoom: 15});

  var request = {
    location: 'palmo',
    radius: '500',
    type: ['resturant'],
  };
*/
/*
var request = {
  query: 'food',
  fields: ['name', 'geometry'],
};
*/
/*
  //service = new google.maps.places.PlacesService(map);
  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);
}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      var place = results[i];
      createMarker(results[i]);
      consolelog(results[i]);
    }
  }
}
*/
/*
  service.findPlaceFromQuery(request, function(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        createMarker(results[i]);
        console.log(results[i]);
        console.log(results[i].name);
      }

      map.setCenter(results[0].geometry.location);
    }
  });
*/

/*
function createMarker(place) {
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
}
*/

/*

const url = "https://maps.googleapis.com/maps/api/place/autocomplete/json?input=shops&key="

fetch(url,{method:"post",mode:"cors"})
.then(response=>{
  return console.log(response.json())
  })

const otherparams = {
  method: 'get',
  mode: 'cors',
  credentials: 'include',
  origin: "https://zephyrgitcode.github.io/FuelApp/",
  headers:{
    "Content-Type":"application/json;",
    "Access-Control-Allow-Origin":"https://zephyrgitcode.github.io/FuelApp/"
  },
  body:undefined
};

fetch(url,otherparams)
  .then(response=>{
    return console.log(response.json())
    })
  .then(res=>{
    console.log(res)
    });
*/
/*

"Authorization":"",
'Access-Control-Allow-Origin': "https://zephyrgitcode.github.io/FuelApp/",
'Access-Control-Allow-Credentials': true,
'Access-Control-Allow-Methods':'POST, GET'

https://maps.googleapis.com/maps/api/place/nearbysearch/json
  ?location=-33.8670522,151.1957362
  &radius=500
  &types=food
  &name=harbour
  &key=
*/
