class ContaBancaria {
    //saldo
    //limite
    //numeroConta
    //agencia
    constructor(){
        this.numeroConta = 123060
        this.limite = 5000
        this.agencia = 1210
        this.saldo = 25000
    }

    sacar(valor){
        this.saldo -= valor
    }

    depositar(valor){
        this.saldo += valor 
    }

    consultarSaldo(){
        return this.saldo 
    }
}

let conta1 = new ContaBancaria()

console.log(conta1.consultarSaldo())
document.write(conta1.consultarSaldo())