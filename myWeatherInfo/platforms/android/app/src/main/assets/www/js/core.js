function startTime() {
	var today=new Date();
	var h=today.getHours();
	var m=today.getMinutes();
	var s=today.getSeconds();

	m=checkTime(m);
	s=checkTime(s);
	document.getElementById('clock').innerHTML=h+":"+m+":"+s;
	t=setTimeout(function(){startTime()},500);
};

function checkTime(i){
	if (i<10){
		i="0" + i;
	}
	return i;
};


function setWeather(data){
	var path = "weather-icons/";
	var icon = "";
	//var message = data.weather[0].icon;
	document.getElementById('temp').innerHTML = data.main.temp + " C&deg;";
	document.getElementById('humidity').innerHTML = data.main.humidity + "%";
	document.getElementById('pressure').innerHTML = data.main.pressure + " hPa";
	document.getElementById('wind_speed').innerHTML = data.wind.speed + " м/с";
	document.getElementById('clouds').innerHTML = data.clouds.all + " %";
	document.getElementById('city_name').innerHTML = data.name;
	
	var icon_id = data.weather[0].icon;
	var message;
	
	switch(icon_id){
		case("11d"):
		icon = "storm";
		Gmessage = "Outside is storming becareful!";
		break;
		case("09d"):
		icon = "heavy"
		Gmessage = "Outside is heavy becareful!";
		break;
		case("10d"):
		icon = "heavy"
		Gmessage = "Outside is heavy becareful!";
		break;
		case("13d"):
		icon = "snow"
		Gmessage = "Outside is snowing becareful!";
		break;
		case("50d"):
		icon = "fog"
		Gmessage = "Outside is foging becareful!";
		break;
		case("01d"):
		icon = "sunny"
		Gmessage = "Outside is sunny! watchout your skins";
		break;
		case("03d"):
		icon = "overcast"
		break;
		case("04d"):
		icon = "overcast"
		break;
		//for night weather
		case("11n"):
		icon = "storm";
		message = "storm"
		Gmessage = "Outside is storming becareful!";
		break;
		case("09n"):
		icon = "heavy"
		Gmessage = "Outside is heavy becareful!";
		break;
		case("10n"):
		icon = "heavy"
		Gmessage = "Outside is heavy becareful!";
		break;
		case("13n"):
		icon = "snow"
		Gmessage = "Outside is snowing becareful!";
		break;
		case("50n"):
		icon = "fog"
		Gmessage = "Outside is foging becareful!";
		break;
		case("01n"):
		icon = "sunny"
		Gmessage = "Outside is sunny! watchout your skins";
		break;
		case("03n"):
		icon = "overcast"
		break;
		case("04n"):
		icon = "overcast"
		break;
	}	
	$('#weather-icon').css({"background": "url("+path+icon+".png) no-repeat center"});
};
/*
function getWeather(){


	var url = "http:\\api.openweathermap.org/data/2.5/weather?q=Busan,kr&units=metric&appid=00abe9a40e3bb3d0476c68e1565144b3";
	

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
	
};	

*/
			 var setTime;
			 var Gmessage;
			function myclock()
			{
			ndata=new Date()

			hours= ndata.getHours();
			mins= ndata.getMinutes();
			secs= ndata.getSeconds();

			if (hours < 10) {hours = "0" + hours }
			if (mins < 10) {mins = "0" + mins }
			if (secs < 10) {secs = "0" + secs }

			

			datastr =hours+":" + mins+":" +secs
			if (setTime==datastr) alert(Gmessage)
			
			document.clockexam.clock.value = " "+datastr;

			setTimeout("myclock()", 1000);
			}
			
			function getTime()
			{
				setTime = $("#input").val();

			}


			function gettWeather()
			{
									var url = "http:\\api.openweathermap.org/data/2.5/weather?q=Busan,kr&units=metric&appid=00abe9a40e3bb3d0476c68e1565144b3";
	

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