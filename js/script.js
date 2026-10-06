console.log ("Hwllo!");
const hitbox = document.getElementsByClassName (".hitbox");
const snorlax = document.getElementsByClassName (".pokemon");
const attack = document.querySelector(".attack");

function hitMiss(){
    let hit = Math.floor(Math.random() * 3);
    let miss = Math.floor(Math.random() * 2);

    if (hit){
        startAttack();
    }
    else if (miss){
        console.log ("Missed!");
        document.querySelector(".dmgOutput").innerHTML = "Missed!";
    }
}

// // how to make sure currentHp is always less than the previous?
// function dmgCalc(){
 
// }

function startAttack(){
    let startHp = 10;
    let dmg = Math.floor(Math.random() * 11);
    let currentHp = Number(startHp) - Number(dmg);

    if (dmg > 0){
        console.log (currentHp);
        document.querySelector(".dmgOutput").innerHTML = (dmg);
        document.querySelector(".hpOutput").innerHTML = (currentHp);
    }
   
    if (dmg === 10 || currentHp == 0){
        console.log ("Defeated!");
        document.querySelector(".dmgOutput").innerHTML = "Defeated!";
        return;
    }
}

document.querySelector(".attack").addEventListener("click", ()=>{
    hitMiss();
    })