let preview=document.getElementById('preview');
let editor=document.getElementById('editor');

editor.addEventListener('input',(event)=>{
preview.innerText=event.target.value
});
