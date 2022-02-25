class Conta{
    constructor(agencia,numero_conta, saldo){
        this.agencia = agencia
        this.numero_conta = numero_conta
        this.saldo = saldo
    }

    mostrarSaldo(){
        return this.saldo
    }

    sacar(valor){
        this.saldo -= valor
    }

    depositar(valor){
        this.saldo += valor
    }
}

class PessoaJuridica extends Conta{
    constructor(agencia,numero_conta,saldo,cnpj){
        super(agencia,numero_conta,saldo)
        this.cnpj = cnpj    
    }
}

let alex = new PessoaJuridica('1244','123560',1000000, '123-456-788-01')
console.log(alex)


