//AND, OR, NOT

//AND &&
let mayor=false;
let suscrito=true;
console.log(true && true);
console.log(false && true);
console.log('operador AND',mayor&&suscrito);

//OR ||
console.log('Operador OR', mayor||suscrito);

//NOT !
console.log('operador NOT', !mayor);
let catalogoInfantil =!mayor; //esto para que se niegue la edad a las personas que NO son mayores (niños)