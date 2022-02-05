var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SonAccount = /** @class */ (function () {
    function SonAccount(balanceInit) {
        this.balanceInit = 0;
        this.balanceInit = balanceInit;
    }
    SonAccount.prototype.deposito = function (ammontare) {
        this.balanceInit += ammontare;
        return ammontare;
    };
    SonAccount.prototype.primoPrelievo = function (ammontare) {
        this.balanceInit -= ammontare;
        return ammontare;
    };
    SonAccount.prototype.secondoPrelievo = function (ammontare) {
        this.balanceInit -= ammontare;
        return ammontare;
    };
    SonAccount.prototype.saldo = function () {
        return this.balanceInit;
    };
    return SonAccount;
}());
var figlio = new SonAccount(500);
console.log('---CONTO FIGLIO---' + '\n');
console.log(figlio);
console.log('Deposito: ' + figlio.deposito(1000));
console.log('Prelievo 1: ' + figlio.primoPrelievo(300));
console.log('Prelievo 2: ' + figlio.secondoPrelievo(150));
console.log('Saldo: ' + figlio.saldo());
var MotherAccount = /** @class */ (function (_super) {
    __extends(MotherAccount, _super);
    function MotherAccount(balanceInit) {
        return _super.call(this, balanceInit) || this;
    }
    MotherAccount.prototype.interessi = function (tasso) {
        return (this.balanceInit * tasso) / 100;
    };
    MotherAccount.prototype.saldo = function () {
        return this.balanceInit + this.interessi(10);
    };
    return MotherAccount;
}(SonAccount));
var madre = new MotherAccount(1000);
console.log('---CONTO MADRE---' + '\n');
console.log(madre);
console.log('Deposito: ' + madre.deposito(400));
console.log('Prelievo 1: ' + madre.primoPrelievo(250));
console.log('Prelievo 2: ' + madre.secondoPrelievo(300));
console.log('Saldo: ' + madre.saldo());
