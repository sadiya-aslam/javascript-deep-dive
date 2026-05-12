const roster = [
    { name: "Satoru Gojo", rank: "Special Grade" },
    { name: "Yuji Itadori", rank: "Grade 1" },
    { name: "Yuta Okkotsu", rank: "Special Grade" },
    { name: "Nobara Kugisaki", rank: "Grade 3" },
    { name: "Yuki Tsukumo", rank: "Special Grade" }
];
let btn=document.getElementById('special-btn')

function renderSpecialGrades(){
let container=document.getElementById('roster-container')
let elite=roster.filter(roster=>roster.rank==="Special Grade");
let htmlArray=elite.map(char=>`<p>${char.name}</p>`).join('')
container.innerHTML=htmlArray;
}

btn.addEventListener('click',renderSpecialGrades)
