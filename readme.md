## GH Page: https://lloni.github.io/ex_WEB-weather-api-webapp/

##### El objetivo de esta actividad es la creación de un landing que permita seleccionar distintas ubicaciones. Por cada ubicación seleccionada debe conectarse con:
- La [API de Google Maps](https://developers.google.com/maps/documentation/javascript/tutorial?hl=es)
- La [API de DarkSky](https://darksky.net/dev/)


### Observaciones generales:

  - Al instanciar un nuevo mapa, la propiedad 'center' recibe como argumento un objeto literal que debe tener la siguiente estructura (la misma para el método setCenter()):

    ~~~js
    santiago_coords: {
	 		lat: -33.4488897,
	 		lng: -70.6692655
	 	  };
    ~~~

  - Los métodos de Google Map manejan las ubicaciones como un objeto literal, sin embargo, la API de DarkSky recibe los parámetros en la url como string.

