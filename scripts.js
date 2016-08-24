// JavaScript Document

$(document).ready(function() {
		var lat, lon, api_url;
		
	if ("geolocation" in navigator) {
		
		$('#showTemp').on('click', function() {
			
			
				navigator.geolocation.getCurrentPosition(getLocation);
				console.log("button was clicked!");
				
				function getLocation(position) {
					lat = position.coords.latitude; //get latitude
					lon = position.coords.longitude; //get longitude
					console.log(position);
					
					api_url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&units=metric&appid=2e9509d0699053d740d140bf92d437c9';
								
					$.ajax({
						url : api_url,
						method: 'GET',
						success : function(data) {
							var tempr = data.main.temp;
							$('#result').text(tempr + 'º');
						}


					});
					

				}
				
				
				
				
								
					
				
				navigator.geolocation.getCurrentPosition(getMap);
					
				var map;
				function getMap(position) {
					map = new google.maps.Map(document.getElementById('map'), {
						center: {
							lat: position.coords.latitude,
							lng: position.coords.longitude
						},
						zoom: 18
					});
					
				}
				
				$("#map").show();
				
				
				
				
		});


				
	} else {
		alert ('Your browser does not support Geolocation, sorry!');
	}
	
});
