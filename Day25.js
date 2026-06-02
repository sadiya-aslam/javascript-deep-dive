let preview = document.getElementById('preview');
let editor = document.getElementById('editor');

editor.addEventListener('input', (event) => {
    let text = event.target.value;
    let formattedText = text.replace(/^# (.*$)/gim, '<h1>$1</h1>')      
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') 
        .replace(/\*(.*?)\*/g, '<em>$1</em>')            
        .replace(/^> (.*$)/gim, '<blockquote>$1</blockquote>')
        .replace(/\n/g, '<br>');
    preview.innerHTML = formattedText;
});
