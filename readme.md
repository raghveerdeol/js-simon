Descrizione:
<!-- Visualizzare in pagina 5 numeri casuali. -->
- creo una funzione getRandomNUmber;
- creo una variabile numeri vuota;
- al interno della quale creo un ciclo while/for con array.length < 5 che mi genera 5 numeri casuali;
- nel ciclo while impongo una condizione "if" se numero già presente nel array ignora, se non presente pusha il numero nel array;
- return array numeri;
- const numeriDaIndovinare = getRandomNumber;
<!-- Da lì parte un timer di 30 secondi. -->

<!-- Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). -->
    -creo una funzione NumeriGiocatore
    - creo let numeroUtente = [];
    -uso ciclo while numeroUtente.length < 5 con al interno prompt per avere 5 numeri dal utente;
    -verifico se il numero non è già presente ne array numeroUtente pusho il numero;
    -se è presente ignoro il numero;
const userNumers = setTimeOut(function{
    NumeoGiocatore();
} 31*1000)
<!-- Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. -->
creo funzione COmparazione(numeriGenerati, numeriGiocati){
    const a = numeriGenerati;
    const b = numeriGiocati;
    let n = [];
    uso ciclo for per verificare l'uguaglianza;
    for (let i = 0; i < 5; i++){
        if(a[i] === b[i]){
            n.push(a[i])
        }
    }
    return n;
}
const risultato = comparazione(getRandomNumber, userNumbers)

