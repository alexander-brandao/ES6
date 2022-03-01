class ContaBancaria {
    //limite
    //numero da conta
    //agencia
    //saldo
    constructor(numero_conta,agencia,saldo){
        this.numero_conta = numero_conta
        this.agencia = agencia
        this.saldo = saldo
    }

    depositar(valor){
        this.saldo =+ valor
    }
    sacar(valor){
        this.saldo =- valor
    }
    limite(limite,valor){
        if(limite === true){
            this.saldo =+ valor
        }
    }
    mostrar_saldo(){
        return this.saldo
    }

}

class ContaTal extends ContaBancaria{
    constructor(){
        super()
    }
    limite(limite,valor){
        limite === true
        this.saldo =+ valor
    }

}

let conta = new ContaTal()

conta.limite(true,1000)
console.log(conta)