//indice validar que no sea menor a cero y que el elemento exista en el array
function getbyId(arr,idx){
    if(idx<0||arr.length <=idx){
        return 'Elemento inexistente';
    } 
    
    return arr[idx];
}
let resultado = getbyId([1,2],1);
console.log(resultado);