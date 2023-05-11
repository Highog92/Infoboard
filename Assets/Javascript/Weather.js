



const Weather = "https://api.open-meteo.com/v1/forecast?latitude=57.05&longitude=9.92&hourly=temperature_2m,weathercode&forecast_days=1"
let todaysWeather;

fetch(Weather)
    .then((response) => {
        //parsing data
        return response.json()
    })

    .then((data) => {
        //The data you wanna use
        console.log(data);
        todaysWeather = data

        // document.querySelector('#weather-box').innerHTML = 
        // `<p>Temperatur pr. time: ${todaysWeather.hourly.temperature_2m}</p>
        // <p>Regn: ${todaysWeather.hourly.rain}</p>
        // <p>Sne: ${todaysWeather.hourly.snowfall}</p>
        // <p>Skydække: ${todaysWeather.hourly.cloudcover}</p>
        // <p>Vind m/s: ${todaysWeather.hourly.windspeed_10m}</p>
        // <p>UV: ${todaysWeather.hourly.uv_index}</p>`

        insertWeather(todaysWeather)

    })

    .catch((error) => {
        //If theres an error
        console.error(error)
    })

let currentIndexTime = new Date().getHours()
let currentWeather = document.querySelector('#current-Weather')
let weatherImg = document.querySelector('#weather-img')
function insertWeather(todaysWeather) {

    currentWeather.innerHTML = `${todaysWeather.hourly.temperature_2m[currentIndexTime]}°`

    switch (todaysWeather.hourly.weathercode[currentIndexTime]) {
        case 0:
            weatherImg.src = "Assets/Images/Fuld sol.svg"; //* sunny
            break;
        case 1:
            weatherImg.src = "Assets/Images/MainlyClear.png"; //* Mainly Clear
            break
        case 2:
            weatherImg.src = "Assets/Images/PartlyCloudy.png"; //* PartlyCloudy
            break
        case 3:
            weatherImg.src = "Assets/Images/OverCast.png" //* OverCast
            break;
        case 45:
            weatherImg.src = "Assets/Images/Fog.png" //* Fog
            break;
        case 48:
            weatherImg.src = "Assets/Images/RimeFog.png" //* Rime Fog
            break
        case 51:
        case 53:
        case 55:
            weatherImg.src = "Assets/Images/Drypsky.png" //* raindrops
            break
        case 56:
            weatherImg.src = "Assets/Images/LightFreezingRain.png" //* Freezing Drizzle light
            break
        case 57:
            weatherImg.src = "Assets/Images/HeavyFreezingRain.png" //* Freezing Drizzle heavy
            break
        case 61:
            weatherImg.src = "Assets/Images/LightRain.png" //*Rain Slight
            break
        case 63:
            weatherImg.src = "Assets/Images/ModeratRain.png" //* Rain Moderate
            break
        case 65:
            weatherImg.src = "Assets/Images/It's Gon Rain.jpeg" //* Heavy Rain
            break
        case 66:
            weatherImg.src = "Assets/Images/LightFreezingRain.png" //* Heavy Rain
            break

        case 67:
            weatherImg.src = "Assets/Images/Dryp sky.png" //* Rain
            break
        case 71:
            weatherImg.src = "Assets/Images/RimeFog.png" //* Rime Fog
            break

        case 73:
            weatherImg.src = "Assets/Images/RimeFog.png" //* Rime Fog
            break

        case 75:
            weatherImg.src = "Assets/Images/Dryp sky.png" //* light snow
            break
        case 77:
            weatherImg.src = "Assets/Images/Dryp sky.png" //* snow
            break
        case 80:
            weatherImg.src = "Assets/Images/RimeFog.png" //* Rime Fog
            break

        case 81:
            weatherImg.src = "Assets/Images/RimeFog.png" //* Rime Fog
            break

        case 82:
            weatherImg.src = "Assets/Images/Dryp sky.png" //*  
            break

        case 85:
            weatherImg.src = "Assets/Images/RimeFog.png" //* Rime Fog
            break

        case 86:
            weatherImg.src = "Assets/Images/Dryp sky.png" //* heavy snow
            break

    }
}


