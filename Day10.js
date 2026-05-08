let scanBtn=document.getElementById('scan-btn');
let result=document.getElementById('display-result');

function scanEnergy(){
    let inputEnergy=document.getElementById('energy-input');
    let powerLevel=inputEnergy.value;
    if(powerLevel>10000){
        result.innerText=`"Warning: Special Grade Detected!"`;
        result.style.color='red';

    }
    else{
        result.innerText=`"Standard Grade. Safe to proceed."`;
        result.style.color='green';
    }
}

scanBtn.addEventListener('click',scanEnergy);