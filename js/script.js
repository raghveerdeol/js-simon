let hEl = document.querySelector("div#random-num");
let numeriDaIndovinare = getRandomNumber();
hEl.append(numeriDaIndovinare);

console.log(numeriDaIndovinare); 
const timer = setTimeout(function (){
    hEl.innerHTML = "";
}, 30 * 1000);




// -verifico se il numero non è già presente ne array numeroUtente pusho il numero;
// -se è presente ignoro il numero;
// const userNumers = setTimeOut(function{
// NumeoGiocatore();
// } 31*1000)
function NumeriGiocatore() {
    let numeroUtente = [];
    let n = 0;
    // -uso ciclo while numeroUtente.length < 5 con al interno prompt per avere 5 numeri dal utente;
    while (numeroUtente.length < 5) {
        const numeroUtente = Number.Math.floor(prompt("Inserire un numero"));
        
    }
}




// -------------------------------------------------FUNZIONI---------------------------------------------------
// - creo una funzione getRandomNUmber;
function getRandomNumber(){
    // - creo una variabile numeri vuota;
    let n = 0;
    const numeri = [];
    // - al interno della quale creo un ciclo while/for con array.length < 5 che mi genera 5 numeri casuali;
    while (numeri.length < 5) {
        const randomNum = Math.floor(Math.random() *100) + 1;
        // - nel ciclo while impongo una condizione "if" se numero già presente nel array ignora, se non presente pusha il numero nel array;
        if (randomNum !== numeri[n]) {
            // - return array numeri;
            numeri.push(randomNum);
            n += 1;
        }
    }
    return numeri;
}

function numeroCompreso(numeroComp){
    while (Number.isNaN(numeroComp) || numeroComp < 0 || numeroComp > 100 ) {
        numeroComp = Number.parseInt(prompt("Inserire un numero"));
    }
    return numeroComp;
}

