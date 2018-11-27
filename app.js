$(document).ready(function(){
  var url = 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/';
  var key = 'c76aeb22b1bf91f9053b8a4a657fff7d';
  var coord = {
    valpo: '-33.0186752,-71.5623415',
    coyha: '-45.5775947,-72.0692554',
    chilo: '-42.5921772,-74.9926254',
    copia: '-33.05031,-71.6190'
  };
var selected = 'valpo';

  generarMapa();


  var queryParams = ['exclude=[minutely,hourly,daily,alerts,flags]', 'lang=es', 'units=auto'];

  $('#select').on('change', function() {
    console.log(url + key + '/' + coord[$(this).val()] + '&' + queryParams[0] + '&' + queryParams[1] + '&' + queryParams[2]);
      selected = $(this).val();
    $.ajax({
      url: url + key + '/' + coord[$(this).val()] + '?' + queryParams[0] + '&' + queryParams[1] + '&' + queryParams[2],
      method: 'GET'
    }).then(function(data) {
      console.log(data);
      $('#temperatura').text(parseInt(data.currently.temperature) + '° ' + data.currently.summary);
      })
  });

  function generarMapa() {

    var latitud = coord[selected].split(",")[0];
    var longitud = coord[selected].split(",")[1];

console.log(latitud, longitud, coord[selected].split(','))

    var mymap = L.map('mapid').setView(selected.split(','), 13);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.streets',
      accessToken: 'pk.eyJ1IjoibGxvbmkiLCJhIjoiY2pveXl2N2M4Mm9mZzNza3dnOWpoODE2cSJ9.HdTLiQGOJA8_WRnpYsz6uA'
    }).addTo(mymap);

    var marker = L.marker(selected.split(',')).addTo(mymap);


  }


});

  //
  // $.ajax({
  //   url: 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/c76aeb22b1bf91f9053b8a4a657fff7d/37.8267,-122.4233',
  //   method: 'GET'
  //   }).then(function(data) {
  //     console.log(data);
  // });
