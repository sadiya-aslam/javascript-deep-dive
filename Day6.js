const characterProfile={
name:'Naruto Uzumaki',
clan:'Uzumaki',
missionsCompleted:100,
isAlive:true
};

console.log(`"${characterProfile.name} from the ${characterProfile.clan} clan has completed ${characterProfile.missionsCompleted} missions."`);
characterProfile.missionsCompleted++;
characterProfile.Rank='Jounin';
console.log(characterProfile);

const trainingDummy={
    health:100,
    name:'Wood Dummy',
    takeDamage(damageAmount){
   this.health=this.health-damageAmount;
console.log(`"${this.name} took ${damageAmount} damage! Health is now ${this.health}."`)
    }
}


trainingDummy.takeDamage(50);
trainingDummy.takeDamage(25);

