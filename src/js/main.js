'use strict';

//variables
const listRecipes = document.querySelector('.js-list-recipes');
const url ='https://api.sampleapis.com/recipes/recipes';

//variable global que guarda los datos
let listRecipesData = [];
const filterInput = document.querySelector(".js-filter");
const favList = document.querySelector(".recipeFavourites");

/*
1-Obtener los datos: fetch
2-Pintarlos en el html: innerHtml
*/

//fetch al principio porque quiero los datos al cargar la página
fetch(url)
.then(response => response.json())
.then(data =>{
    console.log(data);
    listRecipesData = data;
    renderListRecipes(listRecipes,data);
    resultRecipes(data);
    searchRecipe(data);
    handleBtns();
})


//pintar un elemento de la lista
//function renderOneRecipe(){

//}
//pinta el listado
function renderListRecipes(element, recipe){
    for( let i=0; i< recipe.length; i++) {
        element. innerHTML += `<div id= "${recipe[i].id}" class="recipe"> <img class="image" src= ${recipe[i].photoUrl}><br>${recipe[i].title}<br><br>Tipo de comida: ${recipe[i].cuisine}<br>${recipe[i].tags}<br><br class="calories">Calorías: ${recipe[i].calories}</div>`;
    }
    }

function resultRecipes(data) {
    for (const recipe of document.querySelectorAll(".recipe")){
        recipe.addEventListener("click",(ev)=>{
            const recipeInfo = data.find((recipe)=> {if (recipe.id === parseInt(ev.currentTarget.id)){
                return recipe;
            }
            });

            favouritesRecipes.push(recipeInfo);

            const newFav = `<li class=" fav js-recipeFavourites" id=${recipeInfo.id}><div id="${recipeInfo.id}" class="recipe"><img class="image" src=${recipeInfo.photoUrl}<br>${recipeInfo.title}<br>Tipo de comida: ${recipeInfo.cuisine}<br>${recipeInfo.tags}<br class="calories">Calorías: ${recipeInfo.calories}</div>`;

            favList.innerHTML += newFav;
        });
    }
}
   
   
   
   
   
   
   
   
   
    function searchRecipe(food){
        filterInput.addEventListener("input",(ev)=> {
            listRecipes.innerHTML = "";
            const filteredRecipes =[];
            for (let iFood =0; iFood <food.length; iFood++) {
                if ( food[iFoods].cuisine
                    .toLocaleToLowerCase()
                    .includes(filterInput.value.toLocaleToLowerCase() )
                    ) {
                        const recipeInfo = food[iFood];
                        filteredRecipes.push(recipeInfo);
                        listRecipes.innerHTML += `<div id="${recipeInfo.id}" class="recipe"><img class="image" src=${recipeInfo.photoUrl}<br>${recipeInfo.title}<br>Tipo de comida: ${recipeInfo.cuisine}<br>${recipeInfo.tags}<br class="calories">Calorías: ${recipeInfo.calories}</div>`;
                    }
            }
            resultRecipes(filteredRecipes);
        });
    }


    function handleBtns() {
        saveBtn.addEventListener("click",saveRecipes);
    }
   
   
   
   
   
   
   
   




