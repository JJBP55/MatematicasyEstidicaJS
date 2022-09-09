

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