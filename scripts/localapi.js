
// map view of surrounding things in search or on clicked parent

const url = "https://maps.googleapis.com/maps/api/place/autocomplete/json?input=shops&key=AIzaSyCYtSvriljMuTDh3Xc2ZkCBR4WHaJ5ohtI"

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

fetch(url,otherparams).then(data=>{return data.json()}).then(res=>{console.log(res)});

/*

"Authorization":"AIzaSyCYtSvriljMuTDh3Xc2ZkCBR4WHaJ5ohtI;",
'Access-Control-Allow-Origin': "https://zephyrgitcode.github.io/FuelApp/",
'Access-Control-Allow-Credentials': true,
'Access-Control-Allow-Methods':'POST, GET'

https://maps.googleapis.com/maps/api/place/nearbysearch/json
  ?location=-33.8670522,151.1957362
  &radius=500
  &types=food
  &name=harbour
  &key=AIzaSyCYtSvriljMuTDh3Xc2ZkCBR4WHaJ5ohtI
*/
