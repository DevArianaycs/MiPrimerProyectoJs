//Las funciones en js también son objetos
//y se les conoce como objetos de primera clase
//o sea que las funciones pueden ser pasadas como argumentos a otras funciones
//o retornadas de otras funciones

function Usuario(nombre){
    this.nombre=nombre;
}
console.log(Usuario.name)
console.log(Usuario.length)

const U=Usuario //se almacena la función en una variable
let user=new U('Ari') //se crea un objeto a partir de la función

console.log(user);

//pasar funciones como argumentos
function of(Fn, arg){
    return new Fn(arg);
}
let user1=of(Usuario,'Ari');
console.log(user1);
