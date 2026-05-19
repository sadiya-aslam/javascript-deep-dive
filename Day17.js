let container = document.getElementById('anime-container')
let searchBtn = document.getElementById('search-btn')
let searchInput = document.getElementById('search-input');
let favBtn=document.getElementById('fav-anime')
let currentSearch=[]
let favorites=JSON.parse(localStorage.getItem('favAnime')) || []


function renderAnimeData(rawData) {
    if (rawData.data && rawData.data.length > 0) {
        container.innerHTML = rawData.data.map(anime=>`<div>
    <img src="${anime.images.jpg.image_url}" alt="anime-image">
    <h1>${anime.title_english || anime.title}</h1>
    <p>${anime.synopsis}</p>
    <button onclick="addFavorite(${anime.mal_id})" class="fav-btn">❤️ Save</button>
    </div>`).join('')
    }
    else {
        container.innerHTML = `<h1>Sorry, we couldn't find that anime!</h1>`
    }

}
async function getAnimeData(animeName) {
    container.innerHTML = `<h1 style="text-align: center;">Loading... ⏳</h1>`;
    let safeName = encodeURIComponent(animeName)
    let response = await fetch(`https://api.jikan.moe/v4/anime?q=${safeName}`);
    let rawData = await response.json();
    currentSearch=rawData.data
    renderAnimeData(rawData)
}


function handleSearch() {
    let userInput = searchInput.value
    getAnimeData(userInput)
    searchInput.value = ""
}

function addFavorite(animeId) {
   let findAnime=currentSearch.find(anime=>anime.mal_id===animeId);
   if(findAnime){
     favorites.push(findAnime);
     let animeString=JSON.stringify(favorites);
   localStorage.setItem("favAnime",animeString)
   }
   
   
   
}

searchBtn.addEventListener('click', handleSearch);
favBtn.addEventListener('click',function(){renderAnimeData({data:favorites})})
getAnimeData('Attack on Titan');


