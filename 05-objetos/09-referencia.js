let a={};
let b=a;

b.prop=1;
console.log(a,b)
//funciones
let c=1;
function suma (n){
    n++;
}
suma(c);
console.log(c);
//objetos
let d={prop:1}
function suma(n){
    n.prop++;
}
suma(d);
console.log(d);