const punto={
x:10,
y:15,
dibujar:function(){
    console.log('Dibujando...');
}
};
//ver las propiedades de mi objeto
//delete punto.dibujar; //para probar la consola eliminando la funcion
punto.dibujar(); //para verificar que efectivamente la función no existe


//ver si es que una propiedad está contenida en un objeto
if ('dibujar'in punto){
    punto.dibujar();
}

console.log(Object.keys(punto)); //nos devuelve todas las propiedsdes contenidas en el objeto
//nos devuelve las propiedades del objeto contenidas en un array así como también su valor
for (let llave of Object.keys(punto)){
    console.log(llave,punto[llave]);
}
//nos devuelve un array por cada propiedad del objeto con el nombre y su valor, de esta forma
//se podría saber si una propiedad está contenida en un objeto
for(let entry of Object.entries(punto)){

    console.log(entry);
}

//FUNCIONALIDAD NUEVA y preferible
for (let llave in punto){
    console.log(llave,punto[llave])
}