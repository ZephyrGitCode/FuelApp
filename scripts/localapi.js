
// map view of surrounding things in search or on clicked parent

const url = "https://maps.googleapis.com/maps/api/place/autocomplete/json?input=shops&key=AIzaSyCYtSvriljMuTDh3Xc2ZkCBR4WHaJ5ohtI"

const otherparams = {
  method: 'post',
  mode: 'cors',
  headers:{
    "content=type":"application/json;"
    }
  }

fetch(url,otherparams).then(data=>{return data.json()}).then(res=>{console.log(res)});

/*
https://maps.googleapis.com/maps/api/place/nearbysearch/json
  ?location=-33.8670522,151.1957362
  &radius=500
  &types=food
  &name=harbour
  &key=AIzaSyCYtSvriljMuTDh3Xc2ZkCBR4WHaJ5ohtI
*/
