const user={id:1} //con const se pueden agregar o quitar propiedades a los objetos, mas no modificarlos
//agregando elementos al objeto
user.name="Ari";
user.guardar=function(){ //función anónima
    console.log('Guardando',user.name);
}
user.guardar();
//delete
delete user.name;
delete user.guardar;

//no modificar nada del objeto, ni cambiar propiedades ni valores
const user1= Object.freeze({id:1});
user1.name="yazmin";//no se modifica nada
console.log(user1);

//propiedades fijas (ni agregar o eliminar) y valores modificables
const user2= Object.seal({id:1});
user1.name="yazmin";//no se modifica nada
console.log(user2);