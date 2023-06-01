import { myFetch } from "../helpers.js"


const root = document.querySelector('#bus-times')

export const BusPlan = async () => {
    const url = "https://xmlopen.rejseplanen.dk/bin/rest.exe/multiDepartureBoard?id1=851400602&id2=851973402&rttime&format=json&useBus=1"
    const response = await myFetch(url)

    if (response.MultiDepartureBoard.Departure.length) {
        const data = response.MultiDepartureBoard.Departure.splice(0, 5)


        root.innerHTML = ""


        data.map(item => {

            // <div class="allBuses">
            //     <p class="allBusesLine">${busarrivals.MultiDepartureBoard.Departure[0].line}</p>
            //     <p>${removeRoadName0.toUpperCase()}</p>
            //     <p>${busarrivals.MultiDepartureBoard.Departure[0].time}</p>
            // </div>

            const container = document.createElement("div")
            container.classList.add("allBuses")
            const busLine = document.createElement("p")
            busLine.classList.add("allBusesLine")
            const busDir = document.createElement("p")
            const busTime = document.createElement("p")

            busLine.innerText = item.line
            busDir.innerText = item.stop.substring(0, item.stop.indexOf(' '))
            busTime.innerText = calcRemainingTime(`${item.date} ${item.time}`)

            container.append(busLine, busDir, busTime)
            root.append(container)

        })

    }
    // setTimeout(() => {
    //     BusPlan()
    // }, 60000);
}

function calcRemainingTime (departure_datetime) {

    // Nutid i sekunder
    const curStamp = new Date().getTime()

    


    // Splitter dato string op i et array dd-mm-yy-hh-mm
    const depParts = departure_datetime.split(/[.: ]/)
    // console.log(depParts);

    const depYear = new Date().getFullYear()
    const depMonth = parseInt(depParts[1],10) - 1
    const depDay = parseInt(depParts[0],10)
    const depHours = parseInt(depParts[3],10)
    const depMinutes = parseInt(depParts[4],10)

    const depStamp = new Date(
        depYear,
        depMonth,
        depDay,
        depHours,
        depMinutes
    ).getTime()


    const diffSeconds = Math.abs(Math.floor((depStamp - curStamp) / 1000))
    const hours = Math.floor(diffSeconds / 3600)
    const minutes = Math.floor(diffSeconds / 60)

    return hours ? `${hours}t ${minutes}m` : `${minutes}m`
};