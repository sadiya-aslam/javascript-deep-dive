let card=document.getElementById('btn-container');
let btn=document.getElementById('display-btn');

function insertBirthDayCard(){
   card.style.background='#87CEEB';
   btn.style.display="none";
   card.style.boxShadow="none";
   document.body.style.backgroundColor = '#87CEEB';
    card.innerHTML=`<div id="card-container">
    <p id="happy">HAPPY</p>
    <P id="birthday">BIRTHDAY !!</P>
    <P id="name">SADIYA</P>
    <p id="b-wish">May god bless you with lots of happinness and success.</p>
    
    <img src="birthday-wishes.gif" alt="" srcset="">
</div>`

}

btn.addEventListener('click',insertBirthDayCard)