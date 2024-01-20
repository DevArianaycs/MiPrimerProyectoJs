let animales=['gatito guero','chiquitín'];//los elementos de un array comienza en 0
console.log(animales);
console.log(animales[0]);//mostrar primer elemento
animales[2]="gatito borrao";//agregar elementos a mi array
console.log(animales);

animales[10]="pez"; //no tiene orden con el array
console.log(animales);
console.log(animales[7]); //nos mostrará 'undefined' porque el elemento en el array no existe
console.log(typeof animales); //ver el tipo de dato del arreglo

console.log(animales.length); //devuelve la longitud del arreglo