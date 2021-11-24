//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
//Stabilire il vincitore, in base a chi fa il punteggio più alto.

const random = [];
const min = 1;
const max = 7;
for (let i=0; i<2; i++){
    random.push(Math.floor(Math.random() * (max - min) + min));
}

const number1 = parseInt(random[0]);
const number2 = parseInt(random[1]);

document.getElementById('number1').innerHTML = number1;
document.getElementById('number2').innerHTML = number2;

if ( number1 == number2) {
    document.getElementById('esito').innerHTML = "Pareggio";
}
else if (number1 > number2) {
    document.getElementById('esito').innerHTML = "Hai vinto";
}
else document.getElementById('esito').innerHTML = "Hai perso";


