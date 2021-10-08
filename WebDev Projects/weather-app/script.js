const key='9c4437886a2a05db986930452197fd40';
const search=(city) => {
   city=document.getElementById('city').value;
  const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
  fetch(url)
  .then(res => res.json())
  .then (data => {
    console.log(data);
    const temperature=data.main.feels_like-273.15;
    const newTemp=temperature.toFixed(2)
    document.getElementById('city-name').innerText=data.name||"Unknown Location!";
    document.getElementById('city-temp').innerText=newTemp+' °C'
    document.getElementById('city-desc').innerText=data.weather[0].description
    document.getElementById('city-img').setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
  })
}


