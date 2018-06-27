function setWeather(data){
	
	document.getElementById('time').innerHTML = data.time;
	document.getElementById('value').innerHTML = data.value;
	document.getElementById('pressure').innerHTML = data.data.pressure + " hPa";
	document.getElementById('precision').innerHTML = data.data.precision;

	
};		
		
		

		
		
		function get2Weather()
			{
				
				var url = "http://api.openweathermap.org/pollution/v1/co/0.0,10.0/2018Z.json?appid=724340c1cd453ab7c37f2cb8f465b791";
	

			$.ajax({
				url:url,
				type: 'GET',
				dataType: "jsonp",
				contentType: "application/json ",
				success: function(data){
					setWeather(data);
				},
				error: function(){alert("Unexpected Error")}
				});
			}