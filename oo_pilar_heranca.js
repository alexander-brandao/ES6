class Animal {
    constructor(){
        this.cor = ''
        this.tamanho = null
        this.peso = null
    }

    dormir(){
        console.log('O animal esta dormindo')
    }
    comer(){
        console.log('o animal esta comendo')
    }
}

class Cachorro extends Animal{
    constructor(){
        super()
        this.raca = ''
    }
}
// variavel para armazenar o objeto e instancialo

let loki = new Cachorro()

loki.comer()