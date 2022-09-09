//seleccionar el boton
const inputPrice = document.querySelector('#price');
//const inputDiscount = document.querySelector('#discount');
const inputCoupon = document.querySelector('#coupon');
const btn = document.querySelector('#calcular');
const pResult = document.querySelector('#result');

//escuchar el evento
btn.addEventListener('click',calcularPrecioConDescuento);

// const couponsObj = {
//     'JJBP': 30,
//     'Jonathan': 30,
// }

const couponsList = [];
couponsList.push({
    name: 'JJBP',
    discount: 30,
});
couponsList.push({
    name: 'Jonathan',
    discount: 25,
});
couponsList.push({
    name: 'Bello',
    discount: 20,
});

function calcularPrecioConDescuento(){
    // ( p * (100 - D)) / 100

    const price = Number(inputPrice.value);
    //const discount = Number(inputDiscount.value);
    const coupon = inputCoupon.value;

    if(!price || !coupon){
        pResult.innerText = 'Por favor llena el formulario';
        return;
    }
    /*if (Coup > 100){
        pResult.innerText = 'Ingresa un descuento valido';
        return;
    }*/
    let discount;
    
    function validar(couponElement){
        return couponElement.name == coupon;
    }

    const couponInArray = couponsList.find(validar);

    if(couponInArray){
        //discount ?
        discount = couponInArray.discount;
    }
    else{
        //no es valido
        pResult.innerText = 'El cupón no es válido';
        return;
    }

    // if(couponsObj [coupon]){
    //     discount = couponsObj [coupon];
    // }
    // else{
    //     pResult.innerText = 'El cupón no es válido';
    //     return;
    // }

    // switch(coupon){
    //     case 'JJBP':
    //         discount = 30;
    //     break;
    //     case 'Jonathan':
    //         discount = 25;
    //     break;
    //     default:
    //         pResult.innerText = 'El cupón no es válido';
    //     return;    
    // }


    /*if(coupon == 'JJBP'){
        discount = 30;
    }
    else if (coupon == 'Jonathan'){
        discount = 25;
    }
    else{
        pResult.innerText = 'El cupón no es válido';
        return;
    }*/

    const newPrice = (price * (100 - discount)) / 100;

    pResult.innerText = 'El nuevo precio con descuento es $' + newPrice;
}