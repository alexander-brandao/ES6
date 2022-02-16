let cadeiras = Array()

cadeiras[0] = Array()
cadeiras[0]['qt_pernas'] = 4
cadeiras[0]['giratoria'] = false
cadeiras[0]['cor'] = 'azul'


cadeiras[1] = Array()
cadeiras[1]['qt_pernas'] = 1
cadeiras[1]['giratoria'] = true 
cadeiras[1]['cor'] = 'vermelha'

function girar_cadeira(indice){
    if(cadeiras[indice]['giratoria'] === true){
        console.log('girou')
    } else{
        console.log('cadeira não é giratoria')
    }
}

girar_cadeira(1)