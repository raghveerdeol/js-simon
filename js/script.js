let randomEL = document.querySelector("div#random-num");
let numeriDaIndovinare = getRandomNumber();
randomEL.append(numeriDaIndovinare);
 
const timer = setTimeout(function (){
    randomEL.innerHTML = "";
}, 30 * 1000);

const userTimer = setTimeout(function () {
    let numeriSelezionati = NumeriGiocatore();
console.log(numeriSelezionati);
}, 31 * 1000)


// -verifico se il numero non è già presente ne array numeroUtente pusho il numero;
// -se è presente ignoro il numero;
// const userNumers = setTimeOut(function{
// NumeoGiocatore();
// } 31*1000)
function NumeriGiocatore() {
    let numeroUtente = [];
    // -uso ciclo while numeroUtente.length < 5 con al interno prompt per avere 5 numeri dal utente;
    while (numeroUtente.length < 5) {
        const numero = Number.parseInt(prompt("Inserire un numero"));
        let y = numeroCompreso(numero);
        if (differenza(numeroUtente, y) === false) {
            numeroUtente.push(y)
        }
    }
    return numeroUtente;
}






// -------------------------------------------------FUNZIONI---------------------------------------------------
// - creo una funzione getRandomNUmber;
function getRandomNumber(){
    const numeri = [];
    // - al interno della quale creo un ciclo while/for con array.length < 5 che mi genera 5 numeri casuali;
    while (numeri.length < 5) {
        const randomNum = Math.floor(Math.random() *100) + 1;
        if (differenza(numeri, randomNum) === false) {
            numeri.push(randomNum)
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

function differenza(array, num) {
    let n = 0;
    let x = false;
    while (n < array.length + 1) {
        if (array[n] === num) {
            x = true;
        }
        n += 1;
    }
    if (x) {
        return true;
    } else{
        return false;
    }
}

