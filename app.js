const searchMeals = () =>{
    const searchText = document.getElementById('show_meal').value;
    const url = `https://www.themealdb.com/api/json/v1/1/list.php?c=list`
    //load data
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
}
const displayMeals = meals => {
    
     const mealContainer = document.getElementById('meal-container');
//     mealContainer.innerHTML = '';
     meals.forEach(meal => {
        const mealDiv = document.createElement('div');
         mealDiv.className = 'single-result row align-items-center my-3 p-3'
         mealDiv.innerHTML = `
        <div class="col-md-9">
                    <h3 class="meal-name">${meal.strCategory}</h3>
               </div>
    `;
        mealContainer.appendChild(mealDiv);
     })
}