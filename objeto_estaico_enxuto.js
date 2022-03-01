var nome = 'alexander'
var idade = '25'
var profissao = 'Engenheiro'

let pessoa = {
    nome,
    idade,
    profissao,
    descricao(){
        console.log(`${this.nome} , tem ${this.idade} anos e é ${this.profissao}`)
    }
}

console.log(pessoa)

pessoa.descricao()
