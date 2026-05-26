let container = document.getElementById('anime-container');
let animeModal=document.getElementById('anime-modal')
let searchInput = document.getElementById('search-input');
let favBtn = document.getElementById('fav-anime');
let backBtn = document.getElementById('back-btn');
let closeModalBtn = document.getElementById('close-modal');
let previousBtn=document.getElementById('prev-btn');
let nextBtn=document.getElementById('next-btn');
let pageNo=document.getElementById('page-info')
let currentSearch = []
let favorites = JSON.parse(localStorage.getItem('favAnime')) || []

let currentPage = 1;
let currentQuery = ''

function renderAnimeData(rawData, isFavorite = false) {
    if (rawData.data && rawData.data.length > 0) {
        container.innerHTML = rawData.data.map(anime => {
            let buttonHtml = isFavorite ? `<button onclick="removeFavorite(${anime.mal_id})" class="remove-btn">Remove</button>` :
                `<button onclick="addFavorite(${anime.mal_id})" class="fav-btn">❤️ Save</button>`
            return `<div class="anime-card" onclick="openModal(${anime.mal_id})">
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
    
try{
    let safeName = encodeURIComponent(animeName)
    let response = await fetch(`https://api.jikan.moe/v4/anime?q=${safeName}&page=${currentPage}`);
    let rawData = await response.json();

    if(rawData.data){
    renderAnimeData(rawData,false)
    currentSearch=rawData.data;
    if(rawData.pagination.has_next_page ===false ){
nextBtn.style.display="none"
     }
     else{
        nextBtn.style.display="inline-block"
     }
}

}
catch (e){
    container.innerHTML="<h2>⚠️ Network Error: Please check your internet connection or try again later.</h2>"
}
  
}

let typingTimer;
function handleLiveSearch() {
    clearTimeout(typingTimer)

    typingTimer = setTimeout(() => {
        currentQuery = searchInput.value
        if (currentQuery !== '') {
            getAnimeData(currentQuery)
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



async function openModal(animeId){
animeModal.classList.remove('hidden');
let modalBody=document.getElementById('modal-body');
modalBody.innerHTML=`<h2 style="text-align: center;">Loading Details... ⏳</h2>`;
try{
let response=await fetch(`https://api.jikan.moe/v4/anime/${animeId}/full`);
let animeData= await response.json();
let anime=animeData.data;
let genres=anime.genres? anime.genres.map(g =>g.name).join(', '):"Unknown";
let trailer=anime.trailer&& anime.trailer.embed_url ? `<iframe width="100%" height="315" src="${anime.trailer.embed_url}" frameborder="0" style="border-radius: 10px;" allowfullscreen></iframe>`:`<img src="${anime.images.jpg.image_url}" style="width: 100%; max-height: 315px; object-fit: contain; border-radius: 10px;" alt="Anime Cover">`;
modalBody.innerHTML=`<h2 style="margin-bottom: 15px; text-align: center;">${anime.title_english || anime.title}</h2>
    
    ${trailer}
    
    <div style="margin-top: 15px; display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
        <span style="background: #ff4757; color: white; padding: 5px 12px; border-radius: 20px; font-weight: bold; font-size: 14px;">⭐ ${anime.score || "N/A"}</span>
        <span style="background: #2f3542; color: white; padding: 5px 12px; border-radius: 20px; font-size: 14px;">📺 ${anime.status}</span>
        <span style="background: #3742fa; color: white; padding: 5px 12px; border-radius: 20px; font-size: 14px;">🎭 ${genres}</span>
    </div>
    
    <p style="margin-top: 20px; line-height: 1.6; font-size: 15px; color: #dcdde1;">${anime.synopsis || "No synopsis available."}</p>`
}
catch(e){
    modalBody.innerHTML=`<h2>⚠️ Network Error: Please check your internet connection or try again later.</h2>`;
}

}

function closeModal(){
    animeModal.classList.add('hidden')
}

closeModalBtn.addEventListener('click',closeModal)

window.addEventListener('click',(event)=>{
    if(event.target===animeModal){
        closeModal();
    }
})

function nextPage(){
    currentPage++;
    pageNo.innerHTML=`Page ${currentPage}`
    getAnimeData(currentQuery);
    
}

function previousPage(){
    
    if(currentPage>1){
         currentPage--;
         pageNo.innerHTML=`Page ${currentPage}`
         getAnimeData(currentQuery);
    }
    
    console.log(currentPage)
   
}

nextBtn.addEventListener('click',nextPage);
previousBtn.addEventListener('click',previousPage);
