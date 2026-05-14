const slayerCorps = [
    { name: "Tanjiro Kamado", style: "Water Breathing" },
    { name: "Zenitsu Agatsuma", style: "Thunder Breathing" },
    { name: "Inosuke Hashibira", style: "Beast Breathing" },
    { name: "Kyojuro Rengoku", style: "Flame Breathing" },
    { name: "Tengen Uzui", style: "Sound Breathing" },
    { name: "Giyu Tomioka", style: "Water Breathing" }
];


let searchInput=document.getElementById('search-bar');
let container=document.getElementById('corps-container');

function renderSlayer(data){
let card=data.map(char=>`<div><span>${char.name}</span>: <span>${char.style}</span></div>`).join('')
container.innerHTML=card;
}


function filterSlayer(){
    
    let searchItem=searchInput.value.toLowerCase()
  
    let newSlayerArray=slayerCorps.filter(char=>char.name.toLowerCase().includes(searchItem) || char.style.toLowerCase().includes(searchItem));
   
    renderSlayer(newSlayerArray)
    
}

searchInput.addEventListener('input',filterSlayer)
renderSlayer(slayerCorps)
