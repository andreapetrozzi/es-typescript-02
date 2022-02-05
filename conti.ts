//00
class SonAccount {
    //Bilancio iniziale
    balanceInit: number = 0;

    constructor (balanceInit: number) {
        this.balanceInit = balanceInit;
    }

    //METODO 1 -> Incrementa l'ammontare e restituisce la cifra 
    public deposito(ammontare: number): number {
        this.balanceInit += ammontare;
        return ammontare;
    }

    //METODO 2 -> Primo prelievo
    public primoPrelievo(ammontare: number): number {
        this.balanceInit -= ammontare;
        return ammontare;
    }

    //METODO 3 -> Secondo prelievo
    public secondoPrelievo(ammontare: number): number {
        this.balanceInit -= ammontare;
        return ammontare;
    }

    //METODO 4 -> Saldo
    public saldo(): number {
        return this.balanceInit;
    }
}



//00 - Inizializzazione variabili figlio e oggetto figlio
let figlio = new SonAccount(500);                                                                   // -> parte da 500
console.log('---CONTO FIGLIO---' + '\n');
console.log(figlio);                                                                                // -> stampa bilancio iniziale 

console.log('Deposito: ' + figlio.deposito(1000));
console.log('Prelievo 1: ' + figlio.primoPrelievo(300));
console.log('Prelievo 2: ' + figlio.secondoPrelievo(150));
console.log('Saldo: ' + figlio.saldo());





//00 - Creo un metodo e modifico il metodo della classe 
class MotherAccount extends SonAccount {
    constructor(balanceInit: number) {
        super(balanceInit)
    }

    public interessi(tasso: number): number {
        return (this.balanceInit * tasso) / 100;
    }

    public saldo(): number {
        return this.balanceInit + this.interessi(10);
    }
}



//00 - Inizializzazione variabili madre e oggetto madre
let madre = new MotherAccount(1000);
console.log('---CONTO MADRE---' + '\n');
console.log(madre);

console.log('Deposito: ' + madre.deposito(400));
console.log('Prelievo 1: ' + madre.primoPrelievo(250));
console.log('Prelievo 2: ' + madre.secondoPrelievo(300));
console.log('Saldo: ' + madre.saldo());



// tsc conti.ts 
// node conti.js