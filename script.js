
document.getElementById('searchButton').addEventListener('click', function () {
    let search = document.getElementById('inputSearch').value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then(response => response.json())
        .then(data => {

            displayItems(data);

        })

})


//function for display items by search
const displayItems = data => {
    if (data.meals) {
        document.getElementById('inputSearch').value = "";
        document.getElementById('items').innerHTML = "";
        document.getElementById('details').innerHTML = "";

        const items = document.getElementById('items');
        const details = document.getElementById('details');
        const meals = data.meals;
        meals.forEach(meal => {
            const div = document.createElement("div");
            const mealInfo = `
        <img src="${meal.strMealThumb}">
        <h2>${meal.strMeal}</h2>
        `;

            div.innerHTML = mealInfo;
            items.appendChild(div);

            //works when any item is clicked for details
            div.addEventListener('click', function () {
                document.getElementById('details').innerHTML = "";
                // document.getElementById('details').style.display = 'none';
                ingredients(meal);
            })
        });

    }
    else {
        document.getElementById('details').innerHTML = "";
        message = "We don't Find Any meal.";
        items.innerHTML = message;
    }

}
// functionalities for details of item
const ingredients = meal => {
    const details = document.getElementById('details');
    const ul = document.createElement("ul");
    const div = document.createElement("div");

    div.innerHTML = `
    <img src="${meal.strMealThumb}">
    <h2><i>${meal.strMeal}</i></h2>
    <h4 style="color: brown;"><i>Made By:</i></h4>`;

    ul.style.listStyleType = "none";

    const madeBy = [];

    //manually push ingredients data
    madeBy.push(meal.strMeasure1 + " " + meal.strIngredient1);
    madeBy.push(meal.strMeasure2 + " " + meal.strIngredient2);
    madeBy.push(meal.strMeasure3 + " " + meal.strIngredient3);
    madeBy.push(meal.strMeasure4 + " " + meal.strIngredient4);
    madeBy.push(meal.strMeasure5 + " " + meal.strIngredient5);
    madeBy.push(meal.strMeasure6 + " " + meal.strIngredient6);
    madeBy.push(meal.strMeasure7 + " " + meal.strIngredient7);
    madeBy.push(meal.strMeasure8 + " " + meal.strIngredient8);
    madeBy.push(meal.strMeasure9 + " " + meal.strIngredient9);
    madeBy.push(meal.strMeasure10 + " " + meal.strIngredient10);
    madeBy.push(meal.strMeasure11 + " " + meal.strIngredient11);
    madeBy.push(meal.strMeasure12 + " " + meal.strIngredient12);
    madeBy.push(meal.strMeasure13 + " " + meal.strIngredient13);
    madeBy.push(meal.strMeasure14 + " " + meal.strIngredient14);
    madeBy.push(meal.strMeasure15 + " " + meal.strIngredient15);
    madeBy.push(meal.strMeasure16 + " " + meal.strIngredient16);
    madeBy.push(meal.strMeasure17 + " " + meal.strIngredient17);
    madeBy.push(meal.strMeasure18 + " " + meal.strIngredient18);
    madeBy.push(meal.strMeasure19 + " " + meal.strIngredient19);
    madeBy.push(meal.strMeasure20 + " " + meal.strIngredient20);
    
    madeBy.forEach(ingredient => {
        if (ingredient == "null null") {
            const list = document.createElement("li");
            list.innerHTML = '';
            ul.appendChild(list);
        }
        else {
            const list = document.createElement("li");
            list.innerHTML = `${ingredient}`;
            ul.appendChild(list);
        }
    });

    div.appendChild(ul);
    // div.style.display = 'none'
    details.appendChild(div);

}