'use strict';
let recipes = [];

const listRecipes = document.querySelector(".js-recipes");
const saveDatabtn = document.querySelector(".js-saveData");
const loadDatabtn = document.querySelector(".js-loadData");
const searchInput = document.querySelector(".js-text");
const saveBtn = document.querySelector(".js-savebtn");
const recBtn = document.querySelector(".js-recoverbutton");
const btnReset = document.querySelector(".js-delbutton");
const choosenRecipes = document.querySelector(".js-choosen");
const recipeSelection = document.querySelector(".js-recipeFavourites");
const favList = document.querySelector(".recipeFavourites");

let favouritesRecipes = window.localStorage.getItem("recipes")
  ? JSON.parse(window.localStorage.getItem("recipes"))
  : [];

function getData() {
  fetch("https://api.sampleapis.com/recipes/recipes")
    .then((response) => response.json())
    .then(function (data) {
      renderRecipes(listRecipes, data);
      recBtn.addEventListener("click", recRecipes);
      renderFavRecipes(data);
      searchByType(data);
      handleBtns();
    })
    .catch(showError);
  function showError(error) {
    
    listRecipes.innerHTML = `<button class="reload" onclick=location.reload()>Recargar</button>`;
  }
  //pintar las recetas
  function renderRecipes(element, recipe) {
    for (let i = 0; i < recipe.length; i++) {
      element.innerHTML += `<div id="${recipe[i].id}" class="recipe"><img class="image"  src=${recipe[i].photoUrl}><br>${recipe[i].title}<br>Tipo de cocina: ${recipe[i].cuisine}<br>Etiquetas: ${recipe[i].tags} <br class="calories">Calorias: ${recipe[i].calories}</div>`;
    }
  }

  function recRecipes() {
    listRecipes.innerHTML = "";
    let saveRecipes = JSON.parse(localStorage.getItem("recipes"));
    renderRecipes(listRecipes, saveRecipes);
  }
}

function renderFavRecipes(data) {
  for (const recipe of document.querySelectorAll(".recipe")) {
    recipe.addEventListener("click", (event) => {
      const recipeInformation = data.find((recipe) => {
        if (recipe.id === parseInt(event.currentTarget.id)) {
          return recipe;
        }
      });

      favouritesRecipes.push(recipeInformation);

      const newFav = `<li class="fav js-recipeFavourites" id=${recipeInformation.id}><div class="recipe" > <img class="image" src=${recipeInformation.photoUrl}><br>${recipeInformation.title}<br>Tipo de cocina: ${recipeInformation.cuisine}<br>Etiquetas: ${recipeInformation.tags}<br class="calories">Calorias: ${recipeInformation.calories}</div>`;

      favList.innerHTML += newFav;
    });
  }
}
//buscar por tipo de comida
function searchByType(foods) {
  searchInput.addEventListener("input", (ev) => {
    listRecipes.innerHTML = "";
    const filteredRecipes = [];
    for (let iFoods = 0; iFoods < foods.length; iFoods++) {
      if (
        foods[iFoods].cuisine
          .toLowerCase()
          .includes(searchInput.value.toLowerCase())
      ) {
        const recipeInformation = foods[iFoods];
        filteredRecipes.push(recipeInformation);
        listRecipes.innerHTML += `<div id="${recipeInformation.id}" class="recipe"><img class="image"  src=${recipeInformation.photoUrl}><br>${recipeInformation.title}<br>Tipo de cocina: ${recipeInformation.cuisine}<br>Etiquetas: ${recipeInformation.tags} <br class="calories">Calorias: ${recipeInformation.calories}</div>`;
      }
    }
    renderFavRecipes(filteredRecipes);
  });
}

function handleBtns() {
  saveBtn.addEventListener("click", saveRecipes);

  function saveRecipes() {
    localStorage.setItem("recipes", JSON.stringify(favouritesRecipes));
  }
}





