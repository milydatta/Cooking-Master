const searchMeals = () =>{
    const searchText = document.getElementById('show_meal').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=a`
    //load data
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
}
const displayMeals = meals => {
     console.log(meals)
     const mealContainer = document.getElementById('meal-container');
     mealContainer.innerHTML = '';
     meals.forEach(meal => {
        const mealDiv = document.createElement('div');
         mealDiv.className = 'single-result row align-items-center my-3 p-3'
         mealDiv.innerHTML = `
               <div class="col-md-9">
                    <h3 class="meal-name">${meal.strMeal}</h3>
                    <img src="${meal.strMealThumb}" alt="" width="200" height="200">
               </div>
               <div class="col-md-3 text-md-right text-center">
                    <button onclick="getIngredients('${meal.strMealThumb}','${meal.strIngredient1}','${meal.strIngredient2}','${meal.strIngredient3}','${meal.strIngredient4}','${meal.strIngredient5})" class="btn btn-success">Ingredients</button>
               </div>
               `;
        mealContainer.appendChild(mealDiv);
     })
}
const getIngredients = (strMealThumb, strIngredient1, strIngredient2, strIngredient3,strIngredient4,strIngredient5) => {
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=all`
      fetch(url)
     .then(res => res.json())
     .then(data => displayIngredients(data.strIngredient))
 }

const displayIngredients = Ingredients => {
     const ingredientsDiv = document.getElementById('meal-ingredients')
     ingredientsDiv.innerText = Ingredients;   
}
