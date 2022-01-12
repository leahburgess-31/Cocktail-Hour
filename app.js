const menu = document.querySelector('#menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active');
});

const searchBtn = document.getElementById('search-btn');
const drinkList = document.getElementById('drink');
const drinkDetailsContent = document.querySelector('.drink-details-content');
const recipeCloseBtn = document.getElementById('recipe-close-btn');

searchBtn.addEventListener('click', getDrinkList);
drinkList.addEventListener('click', getDrinkRecipe); 
recipeCloseBtn.addEventListener('click', () =>{
    drinkDetailsContent.parentElement.classList.remove('showRecipe');
});




function getDrinkList(){
    let searchInputTxt = document.getElementById('search-input').value.trim();
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`)
    .then(response => response.json())
    .then(data =>{
        let html = "";
        if(data.drinks){
            data.drinks.forEach(drink => {
                html += `
                    <div class="drink-item" data-id = "${drink.idDrink}">
                        <div class="drink-img">
                            <img src="${drink.strDrinkThumb}" alt="drink">
                        </div>
                        <div class="drink-name">
                            <h3>${drink.strDrink}</h3>
                            <a href="#" class = "recipe-btn">Get Recipe</a>
                        </div>
                    </div>
                `;
            });
            drinkList.classList.remove('notFound');
        }else{
            html = "Sorry, we didn't find any cocktail.";
            drinkList.classList.add('notFound'); 
        } 
        drinkList.innerHTML = html; 
    });
}

function getDrinkRecipe(e){
    e.preventDefault();
    if(e.target.classList.contains('recipe-btn')){
        let drinkItem = e.target.parentElement.parentElement;
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkItem.dataset.id}`)
        .then(response => response.json())
        .then(data => drinkRecipeModal(data.drinks)); 
    }
}

function drinkRecipeModal(drink){
    console.log(drink);
    drink = drink[0];
    let html = "";
    html += `
        <h2 class = "recipe-title">${drink.strDrink}</h2>
        <p class = "recipe-category">${drink.strCategory}</p>
        <div class = "recipe-instruct">
            <h3>Instructions:</h3>
            <p>${drink.strInstructions}</p>
        </div>
        <div class = "recipe-instruct">
            <h3>Ingredients:</h3>
        </div>
        `;

        if (drink.strIngredient1 != null){
            html += `<p>${drink.strIngredient1}` + `:`;
            if (drink.strMeasure1 != null){
                html += ` ${drink.strMeasure1}`;
            }
            html += `</p>`;
        }
        if (drink.strIngredient2 != null){
            html += `<p>${drink.strIngredient2}` + `:`;
            if (drink.strMeasure2 != null){
                html += ` ${drink.strMeasure2}`;
            }
            html += `</p>`;
        }
        if (drink.strIngredient3 != null){
            html += `<p>${drink.strIngredient3}` + `:`;
            if (drink.strMeasure3 != null){
                html += ` ${drink.strMeasure3}`;
            }
            html += `</p>`;
        }
        if (drink.strIngredient4 != null){
            html += `<p>${drink.strIngredient4}` + `:`;
            if (drink.strMeasure4 != null){
                html += ` ${drink.strMeasure4}`;
            }
            html += `</p>`;
        }
        if (drink.strIngredient5 != null){
            html += `<p>${drink.strIngredient5}` + `:`;
            if (drink.strMeasure5 != null){
                html += ` ${drink.strMeasure5}`;
            }
            html += `</p>`;
        }
        if (drink.strIngredient6 != null){
            html += `<p>${drink.strIngredient6}` + `:`;
            if (drink.strMeasure6 != null){
                html += ` ${drink.strMeasure6}`;
            }
            html += `</p>`;
        }
        if (drink.strIngredient7 != null){
            html += `<p>${drink.strIngredient7}` + `:`;
            if (drink.strMeasure7 != null){
                html += ` ${drink.strMeasure7}`;
            }
            html += `</p>`;
        }
        if (drink.strIngredient8 != null){
            html += `<p>${drink.strIngredient8}` + `:`;
            if (drink.strMeasure8 != null){
                html += ` ${drink.strMeasure8}`;
            }
            html += `</p>`;
        } 
        if (drink.strIngredient9 != null){
            html += `<p>${drink.strIngredient9}` + `:`;
            if (drink.strMeasure9 != null){
                html += ` ${drink.strMeasure9}`;
            }
            html += `</p>`;
        }
        if (drink.strIngredient10 != null){
            html += `<p>${drink.strIngredient10}` + `:`;
            if (drink.strMeasure10 != null){
                html += ` ${drink.strMeasure10}`;
            }
            html += `</p>`;
        }
        if (drink.strIngredient11 != null){
            html += `<p>${drink.strIngredient11}` + `:`;
            if (drink.strMeasure11 != null){
                html += ` ${drink.strMeasure11}`;
            }
            html += `</p>`;
        }
        if (drink.strIngredient12 != null){
            html += `<p>${drink.strIngredient12}` + `:`;
            if (drink.strMeasure12 != null){
                html += ` ${drink.strMeasure12}`;
            }
            html += `</p>`;
        }
        if (drink.strIngredient13 != null){
            html += `<p>${drink.strIngredient13}` + `:`;
            if (drink.strMeasure13 != null){
                html += ` ${drink.strMeasure13}`;
            }
            html += `</p>`;
        }
        if (drink.strIngredient14 != null){
            html += `<p>${drink.strIngredient14}` + `:`;
            if (drink.strMeasure14 != null){
                html += ` ${drink.strMeasure14}`;
            }
            html += `</p>`;
        }
        if (drink.strIngredient15 != null){
            html += `<p>${drink.strIngredient15}` + `:`;
            if (drink.strMeasure15 != null){
                html += ` ${drink.strMeasure15}`;
            }
            html += `</p>`;
        }

    html +=  `
        <div class = "recipe-drink-img">
            <img src = "${drink.strDrinkThumb}" alt = "">
        </div>
    `;
    drinkDetailsContent.innerHTML = html;
    drinkDetailsContent.parentElement.classList.add('showRecipe');
}

