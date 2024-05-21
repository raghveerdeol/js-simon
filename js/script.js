const numeriDaIndovinare = getRandomNumber();
console.log(numeriDaIndovinare);










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


