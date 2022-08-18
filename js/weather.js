const API_KEY = "a74422b491e4b01f46d17b958a12d5ef";

function onGeoOK(position){
    const lat = position.coords.latitude;
    const log = position.coords.longitude;
    
    console.log(position);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}`;
    fetch(url).then(
        response => response.json()
    ).then(
        data => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            weather.innerHTML = data.weather[0].main;
            city.innerHTML = data.name;
        }
    );
}

function onGeoError(){
    alert("can't find you. no weather for you")
}
navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);