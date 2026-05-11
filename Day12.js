const sorcerers = [
    { name: "Satoru Gojo", rank: "Special Grade", technique: "Limitless" },
    { name: "Kento Nanami", rank: "Grade 1", technique: "Ratio" },
    { name: "Megumi Fushiguro", rank: "Grade 2", technique: "Ten Shadows" }
];

let container=document.getElementById('database-container');
let cardsHtml=""
for(let i=0;i<sorcerers.length;i++){
cardsHtml+=`<div style="border: 1px solid black; margin-bottom: 10px; padding: 10px;">
    <h2>${sorcerers[i].name}</h2>
    <p><strong>Rank:</strong> ${sorcerers[i].rank}</p>
    <p><strong>Technique:</strong> ${sorcerers[i].technique}</p>
</div>`
}

container.innerHTML=cardsHtml;