// -------------------------MAIL--------------------------------

//creo una lista di email dentro un Array
/*const emailList = [
    'ale.mic@gmail.com',
    'ciccio08@hotmail.it',
    'ooook@gmail.com',
    'alessandro.micalizzi08@gmail.com',
    'qwerty.wasd@hotmail.it'
];
//stampo l'arrey che contiene le email in console
console.log(emailList);

//chiedo all'utente la sua email
const userEmail = prompt('Ciao, qual è la tua email?');
console.log(userEmail);

/*faccio un ciclo for che scorre le email all'interno dell'arrey e le confronta 
con quella inserita dall'utente per vedere se è presente*/
/*for (let i = 0; i < emailList.length; i++){
    const el = emailList[i];
    console.log(el);
    //SE l'email è corretta stampo un messaggio positivo
    if(userEmail === el){
        alert('email-corretta');
    //ALTRIMENTI stampo un messaggio d'errore
    }else{
        alert('Attenzione! Ricarica la pagina ed inserisci una email corretta');
        break;
    }
}*/


// -----------------------------DADI------------------------------

//genero due numeri random, uno per l'utente e uno per il computer, che vadano da 1 a 6
const userNumber = Math.floor(Math.random() * 6 + 1);

const pcNumber = Math.floor(Math.random() * 6 + 1);
console.log('numero utente:', userNumber,'numero PC:', pcNumber);

//SE il numero dell'utente è > del numero del computer vince l'utente
if(userNumber > pcNumber){
    alert('HAI VINTO ;)');
//SE il numero dell'utente è < del numero del computer vince il computer
}else if(userNumber < pcNumber){
    alert('Ha vinto il pc :(');
//ALTRIMENTI è un pareggio
}else{
    alert('Pareggio!!');
}


