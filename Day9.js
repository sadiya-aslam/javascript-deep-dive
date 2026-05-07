const triggerBtn=document.getElementById('cast-btn');
const castDomain=()=>{
let arena=document.getElementById('battlefield');
arena.innerHTML="Domain Expansion: Infinite Void";
arena.style.color='white';
arena.style.backgroundColor='black';
arena.style.padding='50px';
arena.style.fontSize='32px';
arena.style.textAlign='center';
}

triggerBtn.addEventListener('click',castDomain)