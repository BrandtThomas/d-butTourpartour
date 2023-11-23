const btnCombatStart = document.querySelector('.btnCombatStart');
const selectChampion = document.querySelector('.selectChampion');
const combatChampion = document.querySelector('.combatChampion');


btnCombatStart.addEventListener('click', () => {
    selectChampion.style.display = "none";
    combatChampion.style.display = "flex";
})

const btnAttaqueGauche = document.querySelector('.btnAttaqueGauche');

btnAttaqueGauche.addEventListener('click', () => {
    console.log('le joueur gauche a lancé une attaque')
})

const btnDefGauche = document.querySelector('.btnDefGauche');

btnDefGauche.addEventListener('click', () => {
    console.log('le joueur gauche se défend')
})

const btnCapaGauche = document.querySelector('.btnCapaGauche');

btnCapaGauche.addEventListener('click', () => {
    console.log('le joueur gauche a lancé sa capacité spéciale')
})