let obj={};
let obj2=new Object();

/*
new Array();
new String(); "",'',
new Number(); 12
new Boolean(); true false
*/

function Usuario(){
    this.name="Ari";
}
let user=new Usuario();
console.log(user.constructor);

//errores comunes
const s1="1+1";
const s2=new String("1+1");
console.log(s1,s2);