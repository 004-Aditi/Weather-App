
console.log("Hello World");
 const apiKey="c1a9919cbe20bc6fee49f4f8de7505b7";
 const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric";
const cityInput=document.querySelector(".search input")
const searchbtn=document.querySelector(".search button")
 async function checkWeather(){
    const response =await fetch(apiUrl+ `&q=${cityInput.value}&appid=${apiKey}`)
    var data=await response.json();
    console.log(data);
    // console.log(data.cod);
    document.querySelector(".city").innerHTML=`${data.name}`;
    document.querySelector(".temp").innerHTML=`${Math.round(data.main.temp)}°C`;
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"kmph";
    const img=document.querySelector(".weather img")
    img.src=`images/${data.weather[0].main}.png`;
}

// checkWeather()
searchbtn.addEventListener("click" ,()=>{
    checkWeather();
})