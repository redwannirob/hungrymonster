
const btn = document.querySelector(".theButton");

btn.addEventListener('click', () => {
    const searchInput = document.querySelector("#searchInput")
    const searchResult = searchInput.value



    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchResult}`)
        .then(res => res.json())
        .then(data => dataLoad(data.meals));


})







const dataLoad = foods => {
    const foodsDiv = document.getElementById("foods-container");

    foods.forEach(food => {
        const foodDiv = document.createElement("div");
        foodDiv.className = "food";
        const foodInfo = `<h3  >Name:${food.strMeal}</h3>
        <img onclick="getFoodDetails(${food.idMeal})" class="foodImg" src="${food.strMealThumb}">`

        foodDiv.innerHTML = foodInfo;
        foodsDiv.appendChild(foodDiv);

        // console.log(food.idMeal);
    });
}



const getFoodDetails = id => {
    console.log(id);
    console.log("object");
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => renderFoodInfo(data.meals[0]));
}


const renderFoodInfo = item => {
    console.log(item);

    const foodsContainer = document.querySelector("#foods-container");
    const searchBar = document.querySelector("#search-bar");
    foodDetails.style.display = "block"
    console.log(foodDetails);

    const foodDetail = `
    <img  class="foodImg" src="${item.strMealThumb}">
    <br>
    <h3  >Name: ${item.strMeal}</h3>
    <br>
    <h6>Ingredients</h6>
    <br>
    <br>
    <p> &#x2705 ${item.strMeasure1} ${item.strIngredient1}  </p>
    <p> &#x2705 ${item.strMeasure2} ${item.strIngredient2}  </p>
    <p> &#x2705 ${item.strMeasure3} ${item.strIngredient3}  </p>
    <p> &#x2705 ${item.strMeasure4} ${item.strIngredient4}  </p>
    <p> &#x2705 ${item.strMeasure5} ${item.strIngredient5}  </p>
    <p> &#x2705 ${item.strMeasure6} ${item.strIngredient6}  </p>
    <p> &#x2705 ${item.strMeasure7} ${item.strIngredient7}  </p>


    `
    foodDetails.innerHTML = foodDetail;





    foodsContainer.style.display = "none"
    searchBar.style.display = "none"





}


