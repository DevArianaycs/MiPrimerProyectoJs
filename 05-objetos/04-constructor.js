//{id:1,recuperarClave:function()}
function Usuario(){
    this.id=1; //nombre de la propiedad que quiero que se le asigne
    this.recuperarClave=function(){
        console.log('recuperando clave...');
    }
} //cuando se creaf Funciones Constructoras, siempre se deben nombrar con la primer letra Mayuscula

//PARA CREAR UN USUARIO A PARTIR DEL CONSTRUCTOR CREADO
let usuario=new Usuario();
console.log(usuario);