//Short-circuit
//Valores que devuelven false
/* -----FALSY-------
1. false
2. 0
3. ''
4. null
5. undenifed
6. NaN
*/
//Ejemplo 1
let nombre='Ariiiii'; //en un sitio donde puede que se asigne un nombre o no
let username= nombre ||'Anónimo'; //asignación de un nombre, de lo contrario asignación de 'Anónimo'
console.log(username);

//Ejemplo 2
function fn1(){
    console.log('Soy función 1');
    return false;
}
function fn2(){
    console.log('soy función 2');
    return true;
}
let x=fn1() &&fn2();
