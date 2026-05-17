let container=document.getElementById('anime-container')
let searchBtn=document.getElementById('search-btn')
let searchInput=document.getElementById('search-input');

function renderAnimeData(rawData){
  if(rawData.data && rawData.data.length > 0){
   container.innerHTML=`<div >
    <img src="${rawData.data[0].images.jpg.image_url}" alt="anime-image">
    <h1>${rawData.data[0].title_english || rawData.data[0].title}</h1>
    <p>${rawData.data[0].synopsis}</p></div>`
  }
    else{
container.innerHTML=`<h1>Sorry, we couldn't find that anime!</h1>`
    }

}
async function getAnimeData(animeName){
  let safeName=encodeURIComponent(animeName)
    let response=await fetch(`https://api.jikan.moe/v4/anime?q=${safeName}&limit=1`);
    let rawData= await response.json();
   renderAnimeData(rawData)
}


function handleSearch(){
let userInput=searchInput.value
getAnimeData(userInput)
searchInput.value=""
}

searchBtn.addEventListener('click',handleSearch)
getAnimeData('Attack on Titan')