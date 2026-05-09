let card=document.getElementById('btn-container');
let btn=document.getElementById('display-btn');

function insertBirthDayCard(){
    
    card.innerHTML=`<div id="card-container">
    <p id="happy">HAPPY</p>
    <P id="birthday">BIRTHDAY !!</P>
    <P id="name">SADIYA</P>
    <p id="b-wish">May god bless you with lots of happinness and success.</p>
    <div id="gif-container">
    <div class="tenor-gif-embed" data-postid="16521260103577784366" data-share-method="host" data-aspect-ratio="1.23077" data-width="100%"><a href="https://tenor.com/view/birthday-wishes-gif-16521260103577784366">Birthday Wishes Sticker</a>from <a href="https://tenor.com/search/birthday+wishes-stickers">Birthday Wishes Stickers</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
</div>
</div>`

}

btn.addEventListener('click',insertBirthDayCard)