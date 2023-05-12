const Skovgaerdsvej = "https://xmlopen.rejseplanen.dk/bin/rest.exe/multiDepartureBoard?id1=851400602&id2=851973402&rttime&format=json&useBus=1"
let busarrivals;

getBuses()
function getBuses() {
fetch(Skovgaerdsvej)
    .then((response) => {
        //parsing data
        return response.json()
    })

    .then((data) => {
        //The data you wanna use
        console.log(data);
        busarrivals = data
    })

    .catch((error) => {
        //If theres an error
        console.error(error)
    })

    .finally(() => {
        //When all is set and done


        for (let i = 0; i < 5; i++) {
            let removeRoadName = busarrivals.MultiDepartureBoard.Departure[i].stop
                .replace(/\s*\([^)]*\)/, ''); // remove anything inside parentheses

            document.querySelector('#bus-times').innerHTML += `
            <div class="allBuses">
                <p class="allBusesLine">${busarrivals.MultiDepartureBoard.Departure[i].line}</p>
                <p>${removeRoadName.toUpperCase()}</p>
                <p>${busarrivals.MultiDepartureBoard.Departure[i].time}</p>
           </div>
            `
        }
    })
    setTimeout(() => {
        getWeather()
    }, 300000);
}


    
    // "rfTime" hvis den er forsinket