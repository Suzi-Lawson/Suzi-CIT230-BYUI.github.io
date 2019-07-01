const weatherForecast = new XMLHttpRequest();
weatherForecast.open("GET", "//api.openweathermap.org/data/2.5/forecast?zip=83263,us&appid=b4f53c29c600d4a6c578dd81d9f2a254&units=imperial", true);
weatherForecast.send();
weatherForecast.onload = function() {
    let forecastInfo = JSON.parse(weatherForecast.responseText);
    console.log(forcastInfo);



    for (var i = 0; i < forecastInfo.list.length; i++) {
        if (forecastInfo.list[i].dt_txt.match('18:00:00')) {
            document.getElementById('dayOnetemp').innerHTML = forecastInfo.list[i].main.temp;
            document.getElementById('dayOne').innerHTML = forecastInfo.list[i].dt;
     
            const iconcode = forecastInfo.list[i].weather[0].icon;
            const icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
            console.log(icon_path);
            document.getElementById('weather_iconOne').innerHTML = icon_path; 
        }
    }

    for (var i = 8; i < 16; i++) {
        if (forecastInfo.list[i].dt_txt == '18:00:00') {
            document.getElementById('dayTwotemp').innerHTML = forecastInfo.list[i].main.temp;
            document.getElementById('dayTwo').innerHTML = forecastInfo.list[i].dt;
     
            const iconcode = forecastInfo.list[i].weather[0].icon;
            const icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
            console.log(icon_path);
            document.getElementById('weather_iconTwo').innerHTML = icon_path; 
        }
    }

    for (var i = 16; i < 24; i++) {
        if (forecastInfo.list[i].dt_txt == '18:00:00') {
            document.getElementById('dayThreetemp').innerHTML = forecastInfo.list[i].main.temp;
            document.getElementById('dayThree').innerHTML = forecastInfo.list[i].dt;
     
            const iconcode = forecastInfo.list[i].weather[0].icon;
            const icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
            console.log(icon_path);
            document.getElementById('weather_iconThree').innerHTML = icon_path; 
        }
    }

    for (var i = 24; i < 32; i++) {
        if (forecastInfo.list[i].dt_txt == '18:00:00') {
            document.getElementById('dayFourtemp').innerHTML = forecastInfo.list[i].main.temp;
            document.getElementById('dayFour').innerHTML = forecastInfo.list[i].dt;
     
            const iconcode = forecastInfo.list[i].weather[0].icon;
            const icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
            console.log(icon_path);
            document.getElementById('weather_iconFour').innerHTML = icon_path; 
        }
    }

    for (var i = 32; i < 40; i++) {
        if (forecastInfo.list[i].dt_txt == '18:00:00') {
            document.getElementById('dayFivetemp').innerHTML = forecastInfo.list[i].main.temp;
            document.getElementById('dayFive').innerHTML = forecastInfo.list[i].dt;
     
            const iconcode = forecastInfo.list[i].weather[0].icon;
            const icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
            console.log(icon_path);
            document.getElementById('weather_iconFive').innerHTML = icon_path; 
        }
    }


}


