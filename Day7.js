
//challenge 2
let activeMissions = [
    { missionName: 'Shibuya', difficultyLevel: 'Hard', reward: 100 }, { missionName: 'Tokyo', difficultyLevel: 'Medium', reward: 60 },
    { missionName: 'Kyuto', difficultyLevel: 'easy', reward: 30 },
]

for (let i = 0; i < activeMissions.length; i++) {
    console.log(`"${activeMissions[i].missionName} is a ${activeMissions[i].difficultyLevel} rank mission. Reward: ${activeMissions[i].reward} coins."`)
}

//object destruction
const weapon={
    type:'Katana',
    power:90
};

const{power:damageOutput,type}=weapon;
console.log(damageOutput);
console.log(type);

// combining loop, object and conditional statement 
const guildRoster = [
    { name: "Yuji Itadori", rank: "Grade 1", missionsCompleted: 45 },
    { name: "Megumi Fushiguro", rank: "Grade 2", missionsCompleted: 60 },
    { name: "Nobara Kugisaki", rank: "Grade 3", missionsCompleted: 30 },
    { name: "Kento Nanami", rank: "Grade 1", missionsCompleted: 120 }
];

function getPromotions(rosterArr){
    let promotedNames=[];
    for(let i=0;i<rosterArr.length;i++){
        if(rosterArr[i].missionsCompleted>=50){
            promotedNames.push(rosterArr[i].name)
        }
    }
return promotedNames;
}

let promotedSorcerers=getPromotions(guildRoster);
console.log(promotedSorcerers);