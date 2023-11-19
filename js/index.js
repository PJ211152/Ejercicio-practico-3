//Variables de los checkbox
let precio1 = document.getElementById("precio1");
let precio2 = document.getElementById("precio2");
let precio3 = document.getElementById("precio3");
let precio4 = document.getElementById("precio4");
let precio5 = document.getElementById("precio5");
let precio6 = document.getElementById("precio6");

 //Funcion del total a pagar
 function totalCompra(){
    //Variables para los precios
    let valor1, valor2, valor3, valor4, valor5, valor6;
    //Comprobación de checkbox, retornaran valor del producto si están checked
    if(precio1.checked){
        valor1 = 32;
    }else{
        valor1 = 0;
    }
    if(precio2.checked){
        valor2 = 16;
    }else{
        valor2 = 0;
    }
    if(precio3.checked){
        valor3 = 28;
    }else{
        valor3 = 0;
    }
    if(precio4.checked){
        valor4 = 12;
    }else{
        valor4 = 0;
    }
    if(precio5.checked){
        valor5 = 15;
    }else{
        valor5 = 0;
    }
    if(precio6.checked){
        valor6 = 23;
    }else{
        valor6 = 0;
    }
    //Se calcula el total a pagar dependiendo del estado de los check
    let totalPagar =  valor1 + valor2 + valor3 + valor4 + valor5 + valor6;
    if(totalPagar != 0){
        console.log(totalPagar);
        alert(`El total a pagar es de $${totalPagar}`);
    }else{
        alert('Debe de escoger productos para realizar la compra');
    }
    
 };

