fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
.then(res => res.json())
.then(data => displayMeals(data.meals));

const displayMeals = meals =>{
    const mealsDiv = document.getElementById('meal-area');
   meals.forEach(meal => {
       const mealDiv = document.createElement('div');
        const mealInfo = `
             <h3 class="meal-name">${meal.name}</h3>
          
             <button onclick="displayMealDetail('${meal.name}')">Details</button>
            `;
           mealDiv.innerHTML = mealInfo;
           mealsDiv.appendChild(mealDiv);
    });
}

const displayMealDetail = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
    .then(res => res.json())
    .then(data => renderMealInfo(data[0]));
} 

const renderMealInfo = meal => {
    const mealDiv = document.getElementById('mealDetail');
    mealDiv.innerHTML = `
       <h1>${meal.name}</h1>
       <p>Ingredients: ${ingredients.name}</p>
       <img src="${meal}">
    `
}
const searchBtn = document.getElementById("search_button");
searchBtn.addEventListener('click',function(){
   const mealArea = document.getElementById("meal-area");
    mealArea.style.display = "block";
})
