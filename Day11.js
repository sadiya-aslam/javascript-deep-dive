const weapons = ["Playful Cloud", "Split Soul Katana", "Inverted Spear of Heaven", "Black Rope"];
let weaponsList=document.getElementById('vault-list');
let listHTML=""
for(let i=0;i<weapons.length;i++){
    listHTML=`${listHTML}<li>${weapons[i]}</li>`
    
}
weaponsList.innerHTML=listHTML;