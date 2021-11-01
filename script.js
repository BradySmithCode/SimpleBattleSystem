// Code made by Brady Smith

const $ = selector => document.querySelector(selector);

var characterHP = 100;
var monsterHP =  100;
var monsterDamage = 0;
var damage = 0;
document.getElementById("characterHitPoints").innerHTML = characterHP;
document.getElementById("monsterHitPoints").innerHTML = monsterHP;

function getRandomDamage(damage) {
    return Math.floor(Math.random() * damage);
}

function getRandomMonsterDamage(monsterDamage) {
    return Math.floor(Math.random() * monsterDamage);
}

function Battle() {
    if (characterHP > 0 && monsterHP > 0) {
        var monsterDmg = getRandomMonsterDamage(monsterDamage + 1)
        var characterDmg = getRandomDamage(damage + 1);
        characterHP = characterHP - monsterDmg;
        monsterHP = monsterHP - characterDmg;
        document.getElementById("characterHitPoints").innerHTML = characterHP + `<sup>-${monsterDmg}</sup>`;
        document.getElementById("monsterHitPoints").innerHTML = monsterHP + `<sup>-${characterDmg}</sup>`;
    }
    if (characterHP <= 0) {
        document.getElementById("characterHitPoints").innerHTML = "DEAD";
        document.getElementById("characterHitPoints").style.color = "red";
    }
    if (monsterHP <= 0) {
        document.getElementById("monsterHitPoints").innerHTML = "DEAD";
        document.getElementById("monsterHitPoints").style.color = "red";
    }
}


document.addEventListener("DOMContentLoaded", () => {
    $(".characterAttack").addEventListener("click", evt => {
        Battle();
   
    })
    $(".characterAxe").addEventListener("click", evt => {
        damage = 15;
   
    })
    $(".characterSword").addEventListener("click", evt => {
        damage = 10;
   
    })
    $(".characterHammer").addEventListener("click", evt => {
        damage = 20;
   
    })
    $(".monsterOrc").addEventListener("click", evt => {
        monsterDamage = 15;
   
    })
    $(".monsterBoar").addEventListener("click", evt => {
        monsterDamage = 10;
   
    })
    $(".monsterWarlock").addEventListener("click", evt => {
        monsterDamage = 20;
   
    })
});