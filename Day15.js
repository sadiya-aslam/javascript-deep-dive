let container=document.getElementById('anime-container')

async function getAnimeData(){
    let response=await fetch("https://api.jikan.moe/v4/anime?q=Attack on Titan&limit=1");
    let rawData= await response.json();
    console.log(rawData)
  let animeTitle=rawData.data[0].title_english;
 
  let animeSynopsis=rawData.data[0].synopsis;
    container.innerHTML=`<div >
    <img src=${rawData.data[0].images.jpg.image_url}>
    <h1>${animeTitle}</h1>
    <p>${animeSynopsis}</p></div>`
}
getAnimeData()