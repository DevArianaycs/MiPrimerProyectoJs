//crear objetos de una forma sencilla y no repetitiva
// let user={
//     id:1,
//     email:'ariana.io',
//     name:'Ari',
//     activo:true,
//     recuperarClave:function(){
//         console.log('recuperando clave...');
//     },
// };

// let use1={
//     id:2,
//     email:'yaz.io',
//     name:'Yaz',
//     activo:true,
//     recuperarClave:function(){
//         console.log('recuperando clave...');
//     },
// };

//forma optima
function crearUsuario(name,email){
    return {
        
        email:email,
        name:name,
        activo:true,
        recuperarClave:function(){
            console.log('recuperando clave...');
        },
    };
}
//creacion de multiples usuarios
let user1=crearUsuario('Arianaycs','ariyaz.calser15@gmail.com')
let user2=crearUsuario('Yazmincs','yaz.calser15@gmail.com')
//imprimir usuarios
console.log(user1,user2);