let weather={
    apiKey: "56e66770ba73e6c0da5c7989b13c378d",
    fetchWeather: function(city){
        fetch(
            "http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+this.apiKey).then((Response)=>Response.json()).then((data)=> this.displayWeather(data));
    },
    displayWeather: function(data){
         const { name } = data; 
         const { icon, description } = data.weather[0];
         const { temp, humidity } = data.main;
         const { speed } = data.wind;
         console.log(name,icon,description,temp,humidity,speed);
         document.querySelector(".city").innerText = "Weather in " +  name;
         document.querySelector(".icon").src="https://openweathermap.org/img/wn/"+ icon + ".png"; 
         document.querySelector(".description").innerText = description ;
         document.querySelector(".temp").innerText = Math.round(temp - 273.15) + " °C";
         document.querySelector(".humidity").innerText = "Humidity: " + humidity  + "%";
         document.querySelector(".wind").innerText  = "Wind speed: " + speed + " km/h";
         document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')";
    },
    search: function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
    } 
};

document.querySelector(".search button").addEventListener("click", function(){
    weather.search();
})
document.querySelector(".search-bar").addEventListener("keyup",function(event){
    if(event.key == "Enter"){
        weather.search();
    }
})


