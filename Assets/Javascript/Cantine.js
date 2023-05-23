

const thisWeeksMeals = "https://infoskaerm.techcollege.dk/umbraco/api/content/getcanteenmenu/?type=json#downloadJSON=true"

let meals;

getMeals()


function getMeals() {
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
                <tbody id="cantineBody">
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
        </tbody>
        `

        let todayDay = new Date().getDay()

            let yepIndex = 0
        switch (todayDay) {
            case 0:
                yepIndex = 0
                break;
            case 1:
                yepIndex = 0
                break;
            case 2:
                yepIndex = 1
                break;
            case 3:
                yepIndex = 2
                break;
            case 4:
                yepIndex = 3
                break;
            case 5:
                yepIndex = 4
                break;
            case 6:
                yepIndex = 0
                break;
        }
            document.querySelector('#cantineBody').children[yepIndex].children[0].style = "font-weight: bold;"
        })
    setTimeout(() => {
        getMeals()
    }, 50000);
};