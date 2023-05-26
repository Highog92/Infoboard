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
            // console.log(data);
            busarrivals = data
        })

        .catch((error) => {
            //If theres an error
            console.error(error)
        })

        .finally(() => {
            //When all is set and done

            let removeRoadName0 = busarrivals.MultiDepartureBoard.Departure[0].stop
                .replace(/\s*\([^)]*\)/, ''); // remove anything inside parentheses
            let removeRoadName1 = busarrivals.MultiDepartureBoard.Departure[1].stop
                .replace(/\s*\([^)]*\)/, '');
            let removeRoadName2 = busarrivals.MultiDepartureBoard.Departure[2].stop
                .replace(/\s*\([^)]*\)/, '');
            let removeRoadName3 = busarrivals.MultiDepartureBoard.Departure[3].stop
                .replace(/\s*\([^)]*\)/, '');
            let removeRoadName4 = busarrivals.MultiDepartureBoard.Departure[4].stop
                .replace(/\s*\([^)]*\)/, '');

            document.querySelector('#bus-times').innerHTML = `
             <div class="allBuses">
                <p class="allBusesLine">${busarrivals.MultiDepartureBoard.Departure[0].line}</p>
                <p>${removeRoadName0.toUpperCase()}</p>
                <p>${busarrivals.MultiDepartureBoard.Departure[0].time}</p>
            </div>
            <div class="allBuses">
                <p class="allBusesLine">${busarrivals.MultiDepartureBoard.Departure[1].line}</p>
                <p>${removeRoadName1.toUpperCase()}</p>
                <p>${busarrivals.MultiDepartureBoard.Departure[1].time}</p>
            </div>
            <div class="allBuses">
                <p class="allBusesLine">${busarrivals.MultiDepartureBoard.Departure[2].line}</p>
                <p>${removeRoadName2.toUpperCase()}</p>
                <p>${busarrivals.MultiDepartureBoard.Departure[2].time}</p>
            </div>
            <div class="allBuses">
                <p class="allBusesLine">${busarrivals.MultiDepartureBoard.Departure[3].line}</p>
                <p>${removeRoadName3.toUpperCase()}</p>
                <p>${busarrivals.MultiDepartureBoard.Departure[3].time}</p>
            </div>
            <div class="allBuses">
                <p class="allBusesLine">${busarrivals.MultiDepartureBoard.Departure[4].line}</p>
                <p>${removeRoadName4.toUpperCase()}</p>
                <p>${busarrivals.MultiDepartureBoard.Departure[4].time}</p>
            </div>
         `
            setTimeout(() => {
                getBuses()
            }, 300000);
        })
};

function calcRemainingTime(Departure_datetime){

    

}



// let today = new Date();
// console.log(busarrivals);
// let nextBuses = busarrivals.map() new Date(today.getFullYear() + "-12-25");

// console.log(today);
// console.log(Christmas);
// var diffMs = (Christmas - today); // milliseconds between now & Christmas
// console.log(diffMs);
// var diffDays = Math.floor(diffMs / 86400000); // days
// var diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
// var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
// console.log(diffMins + " minutes until Christmas =)");


    // "rtTime" hvis den er forsinket