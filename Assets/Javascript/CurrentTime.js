updateTime()

function updateTime() {
    let date = new Date();

    let hour = date.getHours()
    let minutes = date.getMinutes()


    let todayDay = date.getDay()
    let todayDate = date.getDate()
    let todayName;
    let thisMonth = date.getMonth()
    let todayMonth;

    switch (todayDay) {
        case 0:
            todayName = "Søndag"
            break;
        case 1:
            todayName = "Mandag"
            break;
        case 2:
            todayName = "Tirsdag"
            break;
        case 3:
            todayName = "Onsdag"
            break;
        case 4:
            todayName = "Torsdag"
            break;
        case 5:
            todayName = "Fredag"
            break;
        case 6:
            todayName = "Lørdag"
            break;
    }

    switch (thisMonth) {
        case 0:
            todayMonth = "januar"
            break;
        case 1:
            todayMonth = "februar"
            break;
        case 2:
            todayMonth = "marts"
            break;
        case 3:
            todayMonth = "april"
            break;
        case 4:
            todayMonth = "maj"
            break;
        case 5:
            todayMonth = "juni"
            break;
        case 6:
            todayMonth = "juli"
            break;
        case 7:
            todayMonth = "august"
            break;
        case 8:
            todayMonth = "september"
            break;
        case 9:
            todayMonth = "oktober"
            break;
        case 10:
            todayMonth = "november"
            break;
        case 11:
            todayMonth = "december"
            break;
    }


    if (hour < 10 && minutes < 10) {
        document.querySelector('#time-box').innerHTML = `<p id="clock">0${hour}:0${minutes}</p><p id="date">${todayName} d.${todayDate} ${todayMonth}</p>`
    } else if (hour < 10 && minutes >= 10) {
        document.querySelector('#time-box').innerHTML = `<p id="clock">0${hour}:${minutes}</p><p id="date">${todayName} d.${todayDate} ${todayMonth}</p>`
    } else if (hour >= 10 && minutes < 10) {
        document.querySelector('#time-box').innerHTML = `<p id="clock">${hour}:0${minutes}</p><p id="date">${todayName} d.${todayDate} ${todayMonth}</p>`
    } else if (hour >= 10 && minutes >= 10) {
        document.querySelector('#time-box').innerHTML = `<p id="clock">${hour}:${minutes}</p><p id="date">${todayName} d.${todayDate} ${todayMonth}</p>`
    }

    setTimeout(() => { updateTime() }, 1000);
}
