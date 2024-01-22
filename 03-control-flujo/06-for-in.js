//for-in: iterar las propiedades de un objeto
let user={
    id:1,
    name: 'gatito guero',
    age:12,
};

//devuelve el NOMBRE DE LA PROPIEDAD
for (let prop in user){
    console.log(prop);
}
//devuelve el NOMBRE Y EL VALOR DE LA PROPIEDAD
for (let prop in user){
    console.log(prop,user[prop]);
}

let gatitos=['guero','borrao','piratita'];
for(let indice in gatitos)
{
    console.log(indice,gatitos[indice]);
}