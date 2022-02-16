class Cadeira{

    constructor(qt_pernas,giratoria,cor){
        this.qt_pernas = qt_pernas
        this.giratoria = giratoria
        this.cor = cor
    }

    girarCadeira(){
        if(this.giratoria === true){
            console.log('girou')
        } else{
            console.log('cadeira não é giratoria')
        }
    }
}

let cadeiras = Array()

cadeiras.push(new Cadeira(4,true, 'vermelho'))

console.log(cadeiras)