
// map view of surrounding things in search or on clicked parent

// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">


var map;
var service;
var infowindow;

function initMap() {
  var darwincity = new google.maps.LatLng(12.4634, 130.8456);
  var darwincaz = new google.maps.LatLng(12.3733, 130.8817);
  var palmo = new google.maps.LatLng(12.4785, 130.9852);

  infowindow = new google.maps.InfoWindow();

  map = new google.maps.Map(
      document.getElementById('map'), {center: darwincity, zoom: 15});

  var request = {
    query: 'Jingili Water Gardens',
    fields: ['name', 'geometry'],
  };

  service = new google.maps.places.PlacesService(map);

  service.findPlaceFromQuery(request, function(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        createMarker(results[i]);
      }

      map.setCenter(results[0].geometry.location);
    }
  });
}


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
