"use strict";let recipes=[];const listRecipes=document.querySelector(".js-recipes"),saveDatabtn=document.querySelector(".js-saveData"),loadDatabtn=document.querySelector(".js-loadData"),searchInput=document.querySelector(".js-text"),saveBtn=document.querySelector(".js-savebtn"),recBtn=document.querySelector(".js-recoverbutton"),btnReset=document.querySelector(".js-delbutton"),choosenRecipes=document.querySelector(".js-choosen"),recipeSelection=document.querySelector(".js-recipeFavourites"),favList=document.querySelector(".recipeFavourites");let favouritesRecipes=window.localStorage.getItem("recipes")?JSON.parse(window.localStorage.getItem("recipes")):[];function getData(){function e(e,t){for(let i=0;i<t.length;i++)e.innerHTML+=`<div id="${t[i].id}" class="recipe"><img class="image"  src=${t[i].photoUrl}><br>${t[i].title}<br>Tipo de cocina: ${t[i].cuisine}<br>Etiquetas: ${t[i].tags} <br class="calories">Calorias: ${t[i].calories}</div>`}function t(){listRecipes.innerHTML="";let t=JSON.parse(localStorage.getItem("recipes"));e(listRecipes,t)}fetch("https://api.sampleapis.com/recipes/recipes").then(e=>e.json()).then((function(i){e(listRecipes,i),recBtn.addEventListener("click",t),renderFavRecipes(i),searchByType(i),handleBtns()})).catch((function(e){listRecipes.innerHTML='<button class="reload" onclick=location.reload()>Recargar</button>'}))}function renderFavRecipes(e){for(const t of document.querySelectorAll(".recipe"))t.addEventListener("click",t=>{const i=e.find(e=>{if(e.id===parseInt(t.currentTarget.id))return e});favouritesRecipes.push(i);const s=`<li class="fav js-recipeFavourites" id=${i.id}><div class="recipe" > <img class="image" src=${i.photoUrl}><br>${i.title}<br>Tipo de cocina: ${i.cuisine}<br>Etiquetas: ${i.tags}<br class="calories">Calorias: ${i.calories}</div>`;favList.innerHTML+=s})}function searchByType(e){searchInput.addEventListener("input",t=>{listRecipes.innerHTML="";const i=[];for(let t=0;t<e.length;t++)if(e[t].cuisine.toLowerCase().includes(searchInput.value.toLowerCase())){const s=e[t];i.push(s),listRecipes.innerHTML+=`<div id="${s.id}" class="recipe"><img class="image"  src=${s.photoUrl}><br>${s.title}<br>Tipo de cocina: ${s.cuisine}<br>Etiquetas: ${s.tags} <br class="calories">Calorias: ${s.calories}</div>`}renderFavRecipes(i)})}function handleBtns(){saveBtn.addEventListener("click",(function(){localStorage.setItem("recipes",JSON.stringify(favouritesRecipes))}))}