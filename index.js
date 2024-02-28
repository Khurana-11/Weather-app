let apiurl ="https://api.openweathermap.org/data/2.5/weather?units=metric";

const apikey = "945e1eda009055fabfa49d43bf13a7bb";

let cityin = document.querySelector("input");

let cityout = document.querySelector(".city");
let temp = document.querySelector(".temp");
let humid = document.querySelector(".humid");
let wind = document.querySelector(".wind");
let cond = document.querySelector(".condition");

let btn = document.querySelector("button");
let img = document.querySelector(".icon");

let display = document.querySelector(".info");

let error = document.querySelector(".error");


btn.addEventListener("click", () =>{
      check(cityin.value);
});

document.addEventListener("keypress", function(event) {
    
    if (event.key === "Enter") {
        event.preventDefault();
      check(cityin.value);
    }
  });


async function check(city){
    // const res= await fetch(apiurl + `&q=${in}&appid=${apikey}`);
    const res = await fetch(apiurl + `&q=${city}&appid=${apikey}`);

    if(res.status == 404){
    error.style.display= "block";
    display.style.display = "none";
    }
    else{
    var data = await res.json();
    console.log(data);
    error.style.display= "none";
    display.style.display = "block";
    cityout.innerHTML = data.name;
    temp.innerHTML = Math.round(data.main.temp) + "°C";
    humid.innerHTML = data.main.humidity + "%";
    wind.innerHTML = data.wind.speed + " Km/hr";
    cond.innerHTML = data.weather[0].main;

    let wcond = data.weather[0].main;
    switch(wcond){
    case "Clouds":
        img.src="weather imgs/clouds.png";
        break;
    case "Rain":
        img.src="weather imgs/rain.png";
        break;
    
    case "Clear":
        img.src="weather imgs/mist.png";
        break;
    case "Snow":
        img.src = "weather imgs/snow.png";
        break;
    case "Mist":
        img.src="weather imgs/mist.png";
        break;
        
    case "Smoke":
        img.src="weather imgs/snow.png";
        break;

    case "Drizzle":
        img.src = "weather imgs/drizzle.png";
        break;
    
    }
    }
}
