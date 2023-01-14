/*Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: [] 
    * despesas: []
Agora, crie uma função que irá calcular o total de receitas e 
despesas e irá mostrar uma mensagem se a família está com 
saldo positivo ou negativo, seguido do valor do saldo.*/

let familia ={
    passivos: [329, 450, 79.80, 120, 2300],
    ativos: [250, 4500, 120],
}

function somar(array){
    let total = 0;
    for (let valor of array) {
        total += valor
    }
    return total
}

function calcularBalanço(){
    const calcularPassivos = somar(familia.passivos)
    const calcularAtivos = somar(familia.ativos)

    const total = calcularAtivos - calcularPassivos

    const pos = total >= 0
    let textoBalanço = "negativo"

    if(pos){
        textoBalanço = "positivo"
    } 

    console.log(`O saldo da família está ${textoBalanço}: R$${total.toFixed(2)}`)

}

calcularBalanço()