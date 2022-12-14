

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

// function calcularPromedio(lista){

//     // function SumarElementos(valorAcumulado, nuevoValor){
//     //     return valorAcumulado + nuevoValor;
//     // }

//     // const sumarElementos =(valorAcumulado, nuevoValor) =>{
//     //     return valorAcumulado + nuevoValor;
//     // }
//     const sumarElementos =
//     (valorAcumulado, nuevoValor) => valorAcumulado + nuevoValor;

//     const sumaLista = lista.reduce(sumarElementos);
    
//     const promedio = sumaLista / lista.length;
//     console.log(promedio);
//     return promedio;
// }

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

const PlatziMath = {};

PlatziMath.esPar = function esPar(lista){
    return !(lista.length % 2);
}

PlatziMath.esImpar = function esImpar(lista){
    return lista.length % 2;  
}

PlatziMath.calcularModa = function calcularModa(lista){
    const listaCount = {}

    for(let i=0; i < lista.length; i++){
        const elemento = lista[i];

        if(listaCount[elemento]){
            listaCount[elemento] += 1;
        }
        else{
            listaCount[elemento] = 1;
        }
    }

    const listaArray = Object.entries(listaCount);
    const listaOrdenada = ordenarListaBidimensional(listaArray, 1);
    const listaMaxNumber = listaOrdenada[listaOrdenada.length - 1];
    const moda = listaMaxNumber[0];
    // console.log({listaCount, listaArray, listaOrdenada, listaMaxNumber});
    // console.log('La moda es: ' + listaMaxNumber[0]);

    return moda;
}

PlatziMath.calcularMediana = function calcularMediana(listaDesordenada){
    const lista = PlatziMath.ordenarLista(listaDesordenada);

    const listaEsPar = PlatziMath.esPar(lista);

    if (listaEsPar){
        const indexMitad1ListaPar = (lista.length / 2) -1;
        const indexMitad2ListaPar = lista.length / 2;
        
        const listaMitades = [];
        listaMitades.push(lista[indexMitad1ListaPar]);
        listaMitades.push(lista[indexMitad2ListaPar]);
        
        const medianaListaPar = PlatziMath.calcularPromedio(listaMitades);
        return medianaListaPar;
    }
    else{
        const indexMitadListaImpar = Math.floor(lista.length / 2);
        const medianaListaImpar = lista[indexMitadListaImpar];
        console.log(lista[indexMitadListaImpar]);
        console.log(medianaListaImpar);
        return medianaListaImpar;
    }
}

PlatziMath.calcularPromedio = function calcularPromedio(lista){
    function sumarTodosElementos(valorAcumulado, nuevoValor){
        return valorAcumulado + nuevoValor; 
    }

    const sumaLista = lista.reduce(sumarTodosElementos);
    const promedio = sumaLista / lista.length;
    console.log(promedio);
    return promedio;
}

PlatziMath.ordenarLista = function ordenarLista(listaDesordenada){
    function ordenarListaSort(valorAcumulado, nuevoValor){
        // if (valorAcumulado > nuevoValor){
        //     return 1;
        // } 
        // else if(valorAcumulado == nuevoValor){
        //     return 0;
        // }
        // else if(valorAcumulado < nuevoValor){
        //     return -1;
        // }
        
        
        return valorAcumulado - nuevoValor;
        // return 5 - 10 -> -5;
        // return 5 - 5 -> 0;
        // return 10 - 5 -> 5;

    }

    //const lista = listaDesordenada.sort(ordenarListaSort);
    const lista = listaDesordenada.sort((a,b) => a-b);

    return lista;
}

// [ [0,1], [0,1], [0,1] ]

PlatziMath.ordenarListaBidimensional = function ordenarListaBidimensional(listaDesordenada){
    function ordenarListaSort(valorAcumulado, nuevoValor){
        return valorAcumulado[1] - nuevoValor[1];
    }

    //const lista = listaDesordenada.sort(ordenarListaSort);
    const lista = listaDesordenada.sort(ordenarListaSort);

    return lista;
}
