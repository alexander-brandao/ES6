// objeto normal
class Produto {
    constructor(preco,nome){
        this.preco = preco
        this.nome = nome
    }

    verDescricao(){
        console.log(`${this.nome} por apenas ${this.preco}`)
    }
}

let notebook = new Produto(9999,'notebook')

notebook.verDescricao()

// objeto estatico

let produto = {
    nome: 'Computador',
    preco: 20000,
    verDescricao: function(){
        console.log(`${this.nome} por apenas ${this.preco}`)
    }
}

produto.verDescricao()