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

            setTimeout(() => {
                getBuses()
            }, 300000);
        })
};

function calcRemainingTime(departure_datetime){

}


    // "rfTime" hvis den er forsinket