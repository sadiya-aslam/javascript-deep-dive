let characterRank="Jonin";
let missionsCompleted=70;

if(characterRank==="Special Grade" || missionsCompleted>100){
    console.log("S-rank Mission Approved");
}
else if(characterRank==="Jonin" && missionsCompleted>=50){
    console.log("A- Rank Mission Approved");
}

else{
    console.log("Return to the Academy");
}