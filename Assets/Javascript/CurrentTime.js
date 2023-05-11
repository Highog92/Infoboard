

// let date = new Date();

// let time = date.getHours() + ":" + date.getMinutes()
// let day = date.getDate();
// let month = date.getMonth() + 1;
// let year = date.getFullYear();

// let fullDate = `${day}-${month}-${year}`;
// let currentTime = `${time}`;
// // console.log(fullDate);
// // console.log(currentTime);

// document.querySelector('#time-box').innerHTML = `<p>${currentTime}</p><p>${fullDate}</p>`


updateTime()


function updateTime() {
    let date = new Date();

    let time = date.getHours() + ":" + date.getMinutes()
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let fullDate = `${day}-${month}-${year}`;
    let currentTime = `${time}`;
    // console.log(fullDate);
    // console.log(currentTime);

    document.querySelector('#time-box').innerHTML = `<p>${currentTime}</p><p>${fullDate}</p>`

    setTimeout(() => { updateTime()}, 1000);

}