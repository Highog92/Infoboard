



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
let weatherExplanation = document.querySelector('#weather-explanation')
function insertWeather(todaysWeather) {

    currentWeather.innerHTML = `${todaysWeather.hourly.temperature_2m[currentIndexTime]}°`

    switch (todaysWeather.hourly.weathercode[currentIndexTime]) {
        case 0:
            // weatherImg.src = "Assets/Images/Fuld sol.svg"; //* sunny
            weatherImg.src = "Assets/Images/solrigt.svg";
            weatherExplanation.innerHTML = 'Fuld Sol'
            break;
        case 1:
            // weatherImg.src = "Assets/Images/MainlyClear.png"; //* Light Cloud
            weatherImg.src = "Assets/Images/skyet.svg";
            weatherExplanation.innerHTML = 'Få Skyer'

            break
        case 2:
            // weatherImg.src = "Assets/Images/PartlyCloudy.png"; //* PartlyCloudy
            weatherImg.src = "Assets/Images/skyet.svg";
            weatherExplanation.innerHTML = 'Spredte Skyer'
            break
        case 3:
            // weatherImg.src = "Assets/Images/OverCast.png" //* OverCast
            weatherImg.src = "Assets/Images/overskyet.svg"
            weatherExplanation.innerHTML = 'Overskyet'

            break;
        case 45:
            // weatherImg.src = "Assets/Images/Fog.png" //* Fog
            weatherImg.src = "Assets/Images/tåge.svg"
            weatherExplanation.innerHTML = 'Tåget'

            break;
        case 48:
            // weatherImg.src = "Assets/Images/RimeFog.png" //* Rime Fog
            weatherImg.src = "Assets/Images/tåge.svg"
            weatherExplanation.innerHTML = 'Rim Tåge'

            break
        case 51:
        case 53:
        case 55:
            // weatherImg.src = "Assets/Images/Drypsky.png" //* raindrops
            weatherImg.src = "Assets/Images/letregn.svg"
            weatherExplanation.innerHTML = 'Let Regn'

            break
        case 56:
            // weatherImg.src = "Assets/Images/LightFreezingRain.png" //* Freezing Drizzle light
            weatherImg.src = "Assets/Images/letslud.svg"
            weatherExplanation.innerHTML = 'Regn og Sne'
            break
        case 57:
            // weatherImg.src = "Assets/Images/HeavyFreezingRain.png" //* Freezing Drizzle heavy
            weatherImg.src = "Assets/Images/kraftigslud.svg"
            weatherExplanation.innerHTML = 'Slud'

            break
        case 61:
            // weatherImg.src = "Assets/Images/LightRain.png" //*Rain Slight
            weatherImg.src = "Assets/Images/letregn.svg"
            weatherExplanation.innerHTML = 'Let Regn'

            break
        case 63:
            // weatherImg.src = "Assets/Images/ModeratRain.png" //* Rain Moderate
            weatherImg.src = "Assets/Images/kraftigregn.svg"
            weatherExplanation.innerHTML = 'Regn'

            break
        case 65:
            // weatherImg.src = "Assets/Images/It's Gon Rain.jpeg" //* Heavy Rain
            weatherImg.src = "Assets/Images/It's Gon Rain.jpeg"
            weatherExplanation.innerHTML = ''
            break
        case 66:
            // weatherImg.src = "Assets/Images/LightFreezingRain.png" //* Light Freezing Rain
            weatherImg.src = "Assets/Images/letslud.svg"
            weatherExplanation.innerHTML = 'Sne Slag'
            break
        case 67:
            // weatherImg.src = "Assets/Images/Dryp sky.png" //* Rain
            weatherImg.src = "Assets/Images/kraftigslud.svg"
            weatherExplanation.innerHTML = 'Slud'

            break
        case 71:
            // weatherImg.src = "Assets/Images/RimeFog.png" //* Let sne
            weatherImg.src = "Assets/Images/letsne.svg"
            weatherExplanation.innerHTML = 'Det Sner Lidt'
            break

        case 73:
            // weatherImg.src = "Assets/Images/RimeFog.png" //* Sne
            weatherImg.src = "Assets/Images/kraftigsne.svg"
            weatherExplanation.innerHTML = 'Det Sner'
            break

        case 75:
            // weatherImg.src = "Assets/Images/Dryp sky.png" //* Heavy Snow
            weatherImg.src = "Assets/Images/kraftigsne.svg"
            weatherExplanation.innerHTML = 'Det Sner Meget'

            break
        case 77:
            // weatherImg.src = "Assets/Images/Dryp sky.png" //* Hagl
            weatherImg.src = "Assets/Images/kraftigregn.svg"
            weatherExplanation.innerHTML = 'Det Hagler'

            break
        case 80:
            // weatherImg.src = "Assets/Images/RimeFog.png" //* Skybrud
            weatherImg.src = "Assets/Images/letregn.svg"
            weatherExplanation.innerHTML = 'Skybrud'

            break

        case 81:
            // weatherImg.src = "Assets/Images/RimeFog.png" //* Skybrud
            weatherImg.src = "Assets/Images/letregn.svg"
            weatherExplanation.innerHTML = 'Skybrud'
            break

        case 82:
            // weatherImg.src = "Assets/Images/Dryp sky.png" //*  
            weatherImg.src = "Assets/Images/kraftigregn.svg"
            weatherExplanation.innerHTML = 'Kraftige Skybrud'

            break

        case 85:
            // weatherImg.src = "Assets/Images/RimeFog.png" //* Rime Fog
            weatherImg.src = "Assets/Images/letsne.svg"
            weatherExplanation.innerHTML = 'Det sner lidt'
            break

        case 86:
            // weatherImg.src = "Assets/Images/Dryp sky.png" //* heavy snow
            weatherImg.src = "Assets/Images/kraftigsne.svg"
            weatherExplanation.innerHTML = 'Det sner meget'
            break

    }
}


