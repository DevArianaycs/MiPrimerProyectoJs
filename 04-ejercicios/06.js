//crear algoritmo que devuelva cantidad de numeros positivos de un array
let array =[2,5,7,15,-5,-100,55]

function cuantosPositivos(arr){
   let positivos=0;
for(num of arr){
    if(num>0){
        positivos=positivos+1;
    }
}
return[positivos];
}
let resultado=cuantosPositivos(array)
console.log(resultado);