const newsFeed = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.dr.dk%2Fnyheder%2Fservice%2Ffeeds%2Fallenyheder%23"
let news;

fetch(newsFeed)
    .then((response) => {
        //parsing data
        return response.json()
    })

    .then((data) => {
        //The data you wanna use
        console.log(data);
        news = data
    })

    .catch((error) => {
        //If theres an error
        console.error(error)
    })

    .finally(() => {
        //When all is set and done
        news.items.map((news) => {

            document.querySelector('#newsreel').innerHTML += `
                <p>${news.title}</p>

            `
        })

    })
