let preview = document.getElementById('preview');
let editor = document.getElementById('editor');
let h1Btn=document.getElementById('btn-h1');
let boldBtn=document.getElementById('btn-bold');
let italicBtn=document.getElementById('btn-italic');
let quoteBtn=document.getElementById('btn-quote')
editor.addEventListener('input', (event) => {
    let text = event.target.value;
    let formattedText = text.replace(/^# (.*$)/gim, '<h1>$1</h1>')      
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') 
        .replace(/\*(.*?)\*/g, '<em>$1</em>')            
        .replace(/^> (.*$)/gim, '<blockquote>$1</blockquote>')
        .replace(/\n/g, '<br>');
    preview.innerHTML = formattedText;

});

function inserMarkdown(prefix,suffix){
let start=editor.selectionStart;
let end=editor.selectionEnd;
let text=editor.value;

let before=text.substring(0,start);
let selectedText=text.substring(start,end);
let after=text.substring(end,text.length);

editor.value=before +prefix+ selectedText +suffix + after;
editor.dispatchEvent(new Event('input'));
editor.focus()

}

boldBtn.addEventListener('click', () => inserMarkdown('**', '**'));
h1Btn.addEventListener('click', () => inserMarkdown('# ', ''));
italicBtn.addEventListener('click', () => inserMarkdown('*', '*'));
quoteBtn.addEventListener('click', () => inserMarkdown('> ', ''));