let container = document.getElementById('anime-container')
let searchBtn = document.getElementById('search-btn')
let searchInput = document.getElementById('search-input');
let favBtn = document.getElementById('fav-anime')
let currentSearch = []
let favorites = JSON.parse(localStorage.getItem('favAnime')) || []


function renderAnimeData(rawData, isFavorite = false) {
    if (rawData.data && rawData.data.length > 0) {
        container.innerHTML = rawData.data.map(anime => {
            let buttonHtml = isFavorite ? `<button onclick="removeFavorite(${anime.mal_id})" class="remove-btn">Remove</button>` :
                `<button onclick="addFavorite(${anime.mal_id})" class="fav-btn">❤️ Save</button>`
            return `<div id="anime-card">
    <img src="${anime.images.jpg.image_url}" alt="anime-image">
    <h1>${anime.title_english || anime.title}</h1>
    <p>${anime.synopsis}</p>
    ${buttonHtml}
    </div>`}).join('')
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
    currentSearch = rawData.data
    renderAnimeData(rawData)
}


function handleSearch() {
    let userInput = searchInput.value
    getAnimeData(userInput)
    searchInput.value = ""
}

function addFavorite(animeId) {
    let ifAlreadyExists = favorites.some(anime => anime.mal_id === animeId);
    let findAnime = currentSearch.find(anime => anime.mal_id === animeId);
    if (ifAlreadyExists) {
        alert("This anime is alredy in the favourite list")
        return
    }
    if (findAnime) {
        favorites.push(findAnime);
        let animeString = JSON.stringify(favorites);
        localStorage.setItem("favAnime", animeString)
    }


}

function removeFavorite(animeId) {
    favorites = favorites.filter(anime => anime.mal_id !== animeId);
    localStorage.setItem("favAnime", JSON.stringify(favorites));
    renderAnimeData({ data: favorites }, true)
}

searchBtn.addEventListener('click', handleSearch);
favBtn.addEventListener('click', function () { renderAnimeData({ data: favorites }, true) })

getAnimeData('Attack on Titan');


