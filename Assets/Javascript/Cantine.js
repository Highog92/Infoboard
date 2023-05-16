

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
        document.querySelector('#cantineTable').innerHTML =
            `
        <tr>
        <th>
        ${meals.Days[0].DayName}:
        </th>
            <td>${meals.Days[0].Dish}</td>
        </tr>

        <tr>
        <th>
        ${meals.Days[1].DayName}:
        </th>
            <td>${meals.Days[1].Dish}</td>
        </tr>

        <tr>
        <th>
        ${meals.Days[2].DayName}:
        </th>
            <td>${meals.Days[2].Dish}</td>
        </tr>

        <tr>
        <th>
        ${meals.Days[3].DayName}:
        </th>
            <td>${meals.Days[3].Dish}</td>
        </tr>

        <tr>
        <th>
        ${meals.Days[4].DayName}:
        </th>
            <td>${meals.Days[4].Dish}</td>
        </tr>
        `
    })
