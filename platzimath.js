

// function calcularPromedio(lista){
//     //sumar todos los elementos y dividir la cantidad de elementos
//     let sumaLista = 0;

//     for (let i = 0; i < lista.length; i++){
//         sumaLista = sumaLista + lista[i];
//     }
    
//     const promedio = sumaLista / lista.length;
//     console.log(promedio);
//     return promedio;
// }

//metodo reduce

function calcularPromedio(lista){

    // function SumarElementos(valorAcumulado, nuevoValor){
    //     return valorAcumulado + nuevoValor;
    // }

    // const sumarElementos =(valorAcumulado, nuevoValor) =>{
    //     return valorAcumulado + nuevoValor;
    // }
    const sumarElementos =
    (valorAcumulado, nuevoValor) => valorAcumulado + nuevoValor;

    const sumaLista = lista.reduce(sumarElementos);
    
    const promedio = sumaLista / lista.length;
    console.log(promedio);
    return promedio;
}

//array functions
//const a = () => {};

//mi metodo de par o impar
// function parOImpar(lista){
//     const densidad = lista.length;
    
//     if((densidad % 2) == 0){
//         console.log('La lista es par');
//     }
//     else{
//         console.log('La lista es impar');
//     }
// }

function esPar(lista){
    return !(lista.length % 2);
}
function esImpar(lista){
    return lista.length % 2;  
}

function calcularMediana(lista){
    const listaEsPar = esPar(lista);

    if (listaEsPar){

    }
    else{
        const indexMitadListaImpar = Math.floor(lista.length / 2);
        const medianaListaImpar = lista[indexMitadListaImpar];
        console.log(lista[indexMitadListaImpar]);
        console.log(medianaListaImpar);
        return medianaListaImpar;
    }
}