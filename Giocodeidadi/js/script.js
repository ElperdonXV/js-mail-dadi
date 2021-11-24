//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
//Stabilire il vincitore, in base a chi fa il punteggio più alto.

const random = [];
for (i=0; i<2; i++){
    random.push(Math.floor(Math.random() * (6 - 1 + 1)));
}

console.log(random);
