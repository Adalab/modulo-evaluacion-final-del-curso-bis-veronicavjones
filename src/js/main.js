'use strict';

//variables
const listRecipes = document.querySelector('.js-list-recipes');
const url ='https://api.sampleapis.com/recipes/recipes';

//variable global que guarda los datos
let listRecipesData = [];

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
   
   
   
   
   
   
   
   
    /*let html = 
            ` <li>
                 <article class="recipe">
                
                
                    <img class="photo" src=${recipe.photoUrl} alt="photo">
                    <h3 class="recipe_title">${recipe.title}</h3>
                    <ul class="recipes_list">`;


                    for ( const element of recipe.element){

                    }
                    <li class="cuisine">${recipe.cuisine}</li>
                    <li class="tags">${recipe.tags}</li>
                    <li class="clories">${recipe.calories}</li>
                    html += `</ul> </article> </li>`;

}*/




