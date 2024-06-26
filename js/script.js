let randomEL = document.querySelector("div#random-num");
let numeriDaIndovinare = getRandomNumber();
randomEL.append("Ricorda questi Numeri:" + "  "+numeriDaIndovinare);
console.log(numeriDaIndovinare)

const timer = setTimeout(function (){
    randomEL.innerHTML = "Ricorda questi Numeri:" + "....";
}, 30 * 1000);

const userTimer = setTimeout(function () {
    let userEL = document.querySelector("div#user-num");
    let indovinatiEl = document.querySelector("div#indovinati");
    let numeriSelezionati = NumeriGiocatore();
    const risultato = Comparazione(numeriDaIndovinare, numeriSelezionati);
    const totIndovinati = numeriIndovinati(numeriDaIndovinare, numeriSelezionati);
    userEL.append("Il Risultato:" + "  " + risultato);
    indovinatiEl.append("Hai indovinato:" + " "+ totIndovinati + " " + "numeri");
    console.log(numeriSelezionati, risultato);
}, 32 * 1000);


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



function Comparazione(arrayA, arrayB) {
    let n = [];
    for (let index = 0; index < arrayA.length; index++) {
        if (arrayA[index] === arrayB[index]) {
            n.push(arrayA[index]);
        } else {
            n.push("NO")
        }
        
    }
    return n;
}
function numeriIndovinati(arrayA, arrayB) {
    let n = 0;
    for (let index = 0; index < arrayA.length; index++) {
        if (arrayA[index] === arrayB[index]) {
            n = n + 1
        }
    }
    return n;
}

