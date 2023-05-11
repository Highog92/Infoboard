updateTime()

function updateTime() {
    let date = new Date();

    let hour = date.getHours()
    let minutes = date.getMinutes()

    if (hour < 10 && minutes < 10) {
        document.querySelector('#time-box').innerHTML = `<p>0${hour}:0${minutes}</p>`
    } else if (hour < 10 && minutes > 10) {
        document.querySelector('#time-box').innerHTML = `<p>0${hour}:${minutes}</p>`
    } else if (hour > 10 && minutes < 10) {
        document.querySelector('#time-box').innerHTML = `<p>${hour}:0${minutes}</p>`  
    }

    setTimeout(() => { updateTime()}, 1000);
}
