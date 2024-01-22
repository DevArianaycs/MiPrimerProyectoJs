let i=0;
while(i<6){
    i++;
    if(i==2){
        continue; //con continue, la ejecución se regresa al principio, ignorando el código prosiguiente
    }
    if (i==4){
        break; //en el caso de break, la ejecución se detiene al cumplirse la condición
    }
    console.log(i);
}

//se pueden utilizar para los loops anteriores