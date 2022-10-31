let num1 = document.getElementById('n1')
let num2 = document.getElementById('n2')
let res = document.getElementById('res')

const isVazio = (n1, n2) => {
    if(n1.length == 0 || n2.length == 0){
        return false
   } else {
        return true
    }
}

const isValido = (n1, n2) => {
    if(n1 < 0 || n2 < 0 || n1 > 10 || n2 > 10){
       return false
   } else {
       return true
   }
}

//FUNCAO PRINCIPAL
function calcular(){

        if (!isVazio(num1.value, num2.value)){ //chamada da funcao isVazio
            window.alert('ERRO-Digite números!')
        } else{
            let n1 = Number(num1.value)
            let n2 = Number(num2.value) 

            if(!isValido(num1.value, num2.value)){  //chamada da funcao isValido
            window.alert('ERRO-Digite valores válidos')
            } else {
                let media = (n1 + n2) / (2)
                if(media < 7){
                    res.innerHTML = `Reprovado`
                } else if (media < 10){
                     res.innerHTML = `Aprovado`
                } else if (media == 10){
                     res.innerHTML = `Aprovado com distinção`
                }
            }
        } 
        
}