const container = document.getElementById('container_products');

const productos1 = JSON.parse(localStorage.getItem('productos'));

function contar(obj){
    let cont = 0;
    for (let keys in obj){
        cont = cont +1
    }
    return cont
}

function mostrarProductos(){
    const productos = JSON.parse(localStorage.getItem('productos'));
    let nProd = 1;
    for(let keys in productos){
        container.innerHTML +=`
        <div class"row">
        </div>
        `
    }
}


console.log(Object.values(productos1)) 