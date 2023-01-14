/** de 90 para cima -   A
* entre 80 - 89   -   B
* entre 70 - 79   -   C
* entre 60 - 69   -   D
* menor que 60    -   F */

let nota = 100

if(nota >= 90 && nota <= 100){
    console.log("Nota A")
} else if(nota >= 80){
    console.log("Nota B")
} else if(nota >= 70){
    console.log("Nota C")
} else if(nota >= 60){
    console.log("Nota D")
} else if(nota < 60 && nota >= 0){
    console.log("Nota F")
}   else{
    console.log("Digite um valor entre 1 a 100.")
}

