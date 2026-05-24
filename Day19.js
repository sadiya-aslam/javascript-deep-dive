let container = document.getElementById('anime-container')
let searchBtn = document.getElementById('search-btn')
let searchInput = document.getElementById('search-input');
let favBtn = document.getElementById('fav-anime');
let backBtn = document.getElementById('back-btn');
let currentSearch = []
let favorites = JSON.parse(localStorage.getItem('favAnime')) || []

let currentPage = 1;
let currentQuery = ''
let isFetching = false;
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
async function getAnimeData(animeName, isNewSearch = true) {
    if (isFetching) {
        return;
    }
    isFetching = true;
    if (isNewSearch) {
        currentPage = 1;
        currentSearch = [];
        container.innerHTML = `<h1 style="text-align: center;">Loading... ⏳</h1>`
    }

    let safeName = encodeURIComponent(animeName)
    let response = await fetch(`https://api.jikan.moe/v4/anime?q=${safeName}&page=${currentPage}`);
    let rawData = await response.json();

    if (rawData.data && rawData.data.length > 0) {
        currentSearch = currentSearch.concat(rawData.data);
        renderAnimeData({ data: currentSearch }, false)
        currentPage++;
    }

    isFetching = false;
}

let typingTimer;
function handleLiveSearch() {
    clearTimeout(typingTimer)

    typingTimer = setTimeout(() => {
        currentQuery = searchInput.value
        if (currentQuery !== '') {
            getAnimeData(currentQuery, true)
        }
    }, 500)


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
        localStorage.setItem("favAnime", animeString);
        alert("Anime added to the Favorite list")
    }


}

function removeFavorite(animeId) {
    favorites = favorites.filter(anime => anime.mal_id !== animeId);
    localStorage.setItem("favAnime", JSON.stringify(favorites));
    renderAnimeData({ data: favorites }, true)
}

searchInput.addEventListener('input', handleLiveSearch);
favBtn.addEventListener('click', function () { renderAnimeData({ data: favorites }, true) })
backBtn.addEventListener('click', () => {
    renderAnimeData({ data: currentSearch }, false)
})
getAnimeData('Attack on Titan');

const observer = new IntersectionObserver((entries) => {
    let tripwire = entries[0];
    if (tripwire.isIntersecting && currentQuery !== "") {
        getAnimeData(currentQuery, false);
    }
});

let targetDiv = document.getElementById('loading-trigger');
observer.observe(targetDiv);