//Chiedi all’utente la sua email,
//controlla che sia nella lista di chi può accedere,
//stampa un messaggio appropriato sull’esito del controllo.

const mail = prompt('Inserisci la tua email');
const registeredMail = [ "ciao@italia.it", "rosso@rosso.it", "carmelo@melo.it"];
let esito = false;
for (let index=0 ; index < registeredMail.length; index++) {
    console.log(registeredMail[index]);
     if (mail == registeredMail[index]) {
        console.log("Vero");
        esito = true;
    }
}
if (esito == true){
    document.getElementById('esito').innerHTML = "Acesso effettuato";
}
else {
    document.getElementById('esito').innerHTML = "Non sei registrato";
}