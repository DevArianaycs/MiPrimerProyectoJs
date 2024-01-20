//personaje de tv
let nombre ="tanjiro";
let anime= "Demon slayer";
let edad=16;

let personaje={}; //objeto literal
console.log(personaje);
personaje={
    nombre:"Tanjiro",
    anime:"Demon slayer",
    edad:16,
};
console.log(personaje);
console.log(personaje.nombre); //ver solamente la propiedad de un objeto
console.log(personaje['anime']);//otra opción para acceder a las propiedades

personaje.edad=13;//modificar la propiedad de un objeto
personaje['edad']=18;

//ELIMINAR UNA DE LAS PROPIEDADES DEL OBJETO (ELIMINAR 'anime')
delete personaje.anime;
console.log(personaje);
