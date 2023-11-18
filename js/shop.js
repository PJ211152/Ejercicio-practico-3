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
    for(let i = 0; i<productos.length;i++){
        let producto = productos[i];

        container.innerHTML +=`
        <div class="col-12 container_individual fontCenter">
        <h3 class='fontCenter'>${producto.name}</h3>
        <img src='${producto.image}' class='product_image'>
        <h4 class='mt-4'>Precio: $${producto.price}</h4>
        <button class='btn btn-success'>Comprar</button>
        </div>
        `
        
    }
}

mostrarProductos();
console.log(Object.values(productos1)) 