const activity = "https://iws.itcn.dk/techcollege/schedules?departmentcode=smed#"
let team1;


fetch(activity)
    .then((response) => {
        //parsing data
        return response.json()
    })

    .then((data) => {
        //The data you wanna use
        console.log(data);
        team1 = data
    })

    .catch((error) => {
        //If theres an error
        console.error(error)
    })

    .finally(() => {
        //When all is set and done
        // if (team1 && team1.value && team1.value.length > 0) {
        //     const startDate = team1.value[0].StartDate;
        //     const time = startDate.split('T')[1].slice(0, -9);
        //     document.querySelector('#activities').innerHTML =
        //         `<p>Hold:${team1.value[0].Team}</p>
        //     <p>Fag: ${team1.value[0].Subject}</p>
        //     <p>Rum: ${team1.value[0].Room}</p>
        //     <p>Start: ${time}</p>
        //     <p>Hold:${team1.value[6].Team}</p>
        //     <p>Fag: ${team1.value[6].Subject}</p>
        //     <p>Rum: ${team1.value[6].Room}</p>
        //     <p>Start: ${time}</p>
        //     <p>Hold:${team1.value[12].Team}</p>
        //     <p>Fag: ${team1.value[12].Subject}</p>
        //     <p>Rum: ${team1.value[12].Room}</p>
        //     <p>Start: ${time}</p>
        //     <p>Hold:${team1.value[17].Team}</p>
        //     <p>Fag: ${team1.value[17].Subject}</p>
        //     <p>Rum: ${team1.value[17].Room}</p>
        //     <p>Start: ${time}</p>
        //     <p>Hold:${team1.value[6].Team}</p>
        //     <p>Fag: ${team1.value[6].Subject}</p>
        //     <p>Rum: ${team1.value[6].Room}</p>
        //     <p>Start: ${time}</p>
        //     <p>Hold:${team1.value[6].Team}</p>
        //     <p>Fag: ${team1.value[6].Subject}</p>
        //     <p>Rum: ${team1.value[6].Room}</p>
        //     <p>Start: ${time}</p>
        //     <p>Hold:${team1.value[6].Team}</p>
        //     <p>Fag: ${team1.value[6].Subject}</p>
        //     <p>Rum: ${team1.value[6].Room}</p>
        //     <p>Start: ${time}</p>
        //     <p>Hold:${team1.value[6].Team}</p>
        //     <p>Fag: ${team1.value[6].Subject}</p>
        //     <p>Rum: ${team1.value[6].Room}</p>
        //     <p>Start: ${time}</p>`;
        // } else {
        //     document.querySelector('#teams').innerHTML = "<p>No data available</p>";
        // }

    });