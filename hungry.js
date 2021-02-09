
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


    });
}



const getFoodDetails = id => {

    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => renderFoodInfo(data.meals[0]));
}


const renderFoodInfo = item => {


    const foodsContainer = document.querySelector("#foods-container");
    const searchBar = document.querySelector("#search-bar");
    foodDetails.style.display = "block"


    const foodDetail = `
    <img  class="foodImg" src="${item.strMealThumb}">
    <br>
    <h3  >Name: ${item.strMeal}</h3>
    <br>
    <h6>Ingredients</h6>
    <br>
    <br>
     ${item.strMeasure1 && ` <p>  &#x2705 ${item.strMeasure1} ${item.strIngredient1}  </p>`}
     ${item.strMeasure2 && ` <p>  &#x2705 ${item.strMeasure2} ${item.strIngredient2}  </p>`}
     ${item.strMeasure3 && ` <p>  &#x2705 ${item.strMeasure3} ${item.strIngredient3}  </p>`}
     ${item.strMeasure4 && ` <p>  &#x2705 ${item.strMeasure4} ${item.strIngredient4}  </p>`}
     ${item.strMeasure5 && ` <p>  &#x2705 ${item.strMeasure5} ${item.strIngredient5}  </p>`}
     ${item.strMeasure6 && ` <p>  &#x2705 ${item.strMeasure6} ${item.strIngredient6}  </p>`}
     ${item.strMeasure7 && ` <p>  &#x2705 ${item.strMeasure7} ${item.strIngredient7}  </p>`}
     ${item.strMeasure8 && ` <p>  &#x2705 ${item.strMeasure8} ${item.strIngredient8}  </p>`}
     ${item.strMeasure9 && ` <p>  &#x2705 ${item.strMeasure9} ${item.strIngredient9}  </p>`}
     ${item.strMeasure10 && ` <p>  &#x2705 ${item.strMeasure10} ${item.strIngredient10}  </p>`}
     ${item.strMeasure11 && ` <p>  &#x2705 ${item.strMeasure11} ${item.strIngredient11}  </p>`}
     ${item.strMeasure12 && ` <p>  &#x2705 ${item.strMeasure12} ${item.strIngredient12}  </p>`}
     ${item.strMeasure13 && ` <p>  &#x2705 ${item.strMeasure13} ${item.strIngredient12}  </p>`}
     ${item.strMeasure14 && ` <p>  &#x2705 ${item.strMeasure14} ${item.strIngredient14}  </p>`}
     ${item.strMeasure15 && ` <p>  &#x2705 ${item.strMeasure15} ${item.strIngredient15}  </p>`}
     ${item.strMeasure16 && ` <p>  &#x2705 ${item.strMeasure16} ${item.strIngredient16}  </p>`}
     ${item.strMeasure17 && ` <p>  &#x2705 ${item.strMeasure17} ${item.strIngredient17}  </p>`}
     ${item.strMeasure18 && ` <p>  &#x2705 ${item.strMeasure18} ${item.strIngredient18}  </p>`}
     ${item.strMeasure19 && ` <p>  &#x2705 ${item.strMeasure19} ${item.strIngredient19}  </p>`}
     ${item.strMeasure20 && ` <p>  &#x2705 ${item.strMeasure20} ${item.strIngredient20}  </p>`}
    


    `
    foodDetails.innerHTML = foodDetail;





    foodsContainer.style.display = "none"
    searchBar.style.display = "none"





}


