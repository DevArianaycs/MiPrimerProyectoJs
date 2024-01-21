function suma(a,b){
    //acceder a todos los valores de la función
    console.log(arguments);
    return a+b;
    
}
//le pasaremos un argumento a la función
let resultado=suma(5,9); //se crea variable donde se almacenará el resultado
console.log(resultado);

//los argumentos pueden ser varios
let res=suma(5,6,1,2,3);
console.log(res);

//tipo de la función suma
console.log(typeof suma);


