

const thisWeeksMeals = "https://infoskaerm.techcollege.dk/umbraco/api/content/getcanteenmenu/?type=json#downloadJSON=true"

let meals;

fetch(thisWeeksMeals)
    .then((response) => {
        //parsing data
        return response.json()
    })

    .then((data) => {
        //The data you wanna use
        console.log(data);
        meals = data
    })

    .catch((error) => {
        //If theres an error
        console.error(error)
    })

    .finally(() => {
        //When all is set and done
        document.querySelector('#cantine').innerHTML =
        // <img class="cantine-asset" src="Assets/Images/cutlery-plate-svgrepo-com.svg" alt="Cutlery">
        `
        <p>${meals.Days[0].DayName}: ${meals.Days[0].Dish}</p>
        <p>${meals.Days[1].DayName}: ${meals.Days[1].Dish}</p>
        <p>${meals.Days[2].DayName}: ${meals.Days[2].Dish}</p>
        <p>${meals.Days[3].DayName}: ${meals.Days[3].Dish}</p>
        <p>${meals.Days[4].DayName}: ${meals.Days[4].Dish}</p>
        `
    })
