//Chiedi all’utente la sua email,
//controlla che sia nella lista di chi può accedere,
//stampa un messaggio appropriato sull’esito del controllo.

const mail = prompt('Inserisci la tua email');
const registeredMail = ["ciao@italia.it" , "rosso@rosso.it" , "carmelo@melo.it"];
for (let index=0; index < 3; index++ ){
    if(mail == registeredMail[index]){
        console.log('Login effettuato corretamente');
    }
    else console.log('Email non registrata');
}