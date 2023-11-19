const btnCarrito = document.getElementById("icon_compra");
const sesion = JSON.parse(localStorage.getItem('sesion'));

//Esta funcion añade la cuenta de admin y algunos productos al local storage
function initiation() {


  if (!localStorage.getItem("usuarios")) {
    let usuarios = [
      {
        id:0,
        name: "admin",
        lastname: "admin",
        username: "admin",
        age: 25,
        email: "admin@gmail.com",
        password: "admin",
      },
    ];

    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  }

  if (!localStorage.getItem("productos")) {
    let productos = [
        {
            id:1,
            name: "M171 Wirless mouse",
            image:
              "https://resource.logitech.com/content/dam/logitech/en/products/mice/m171/gallery/m171-mouse-top-view-grey.png",
            price: 51,
            category: "mouse"
          },
          {
            id:2,
            name: "GT RGB Cherry MX",
            image:
              "https://es.thermaltake.com/media/catalog/product/cache/023a745bb14092c479b288481f91a1bd/l/2/l20gt01.jpg",
            price: 130,
            category: "keyboard"
          },
          {
            id:3,
            name: "TOUGHRAM XG RGB D5 Memory DDR5 7600MT/s 32GB (16GB x2)",
            image:
              "https://es.thermaltake.com/media/catalog/product/cache/5c6d00a0ea315efe12bf2a0a73047152/r/g/rg34d516gx2-7600c38b_01.jpg",
            price: 150,
            category: "RAM"
          },
    ]
      
    

    localStorage.setItem('productos', JSON.stringify(productos));
  }

  if(localStorage.getItem('sesion')){
    const btnSesion = document.getElementById('formSesion');

    if(sesion.id == 0){
      if(document.URL.includes('index.html')){
      btnSesion.innerHTML =`
      <li><a class="dropdown-item" href="pages/adminProfile.html" >Administrador</a></li>
      <li><a class="dropdown-item" href="pages/eliminar.html" >Eliminar usuarios</a></li>
      <li><a class="dropdown-item" href="index.html" id="closeSesion">Cerrar sesion</a></li>
      `;

      }else{
        btnSesion.innerHTML =`
      <li><a class="dropdown-item" href="adminProfile.html" >Administrador</a></li>
      <li><a class="dropdown-item" href="eliminar.html" >Eliminar usuarios</a></li>
      <li><a class="dropdown-item" href="../index.html" id="closeSesion">Cerrar sesion</a></li>
      `;
      }
    }else{
      if(document.URL.includes('index.html')){
        btnSesion.innerHTML =`
        <li><a class="dropdown-item" href="pages/userProfile.html" >Perfil</a></li>
        <li><a class="dropdown-item" href="index.html" id="closeSesion">Cerrar sesion</a></li>
        `;
  
        }else{
          btnSesion.innerHTML =`
        <li><a class="dropdown-item" href="userProfile.html" >Perfil</a></li>
        <li><a class="dropdown-item" href="../index.html" id="closeSesion">Cerrar sesion</a></li>
        `;
        }
    }
  }

  const btnCerrarSesion = document.getElementById('closeSesion');

  if(btnCerrarSesion != null){
    btnCerrarSesion.onclick = function(){
      if(btnCerrarSesion != null){
        localStorage.removeItem('sesion');
        if(document.URL.includes('index.html')){
          document.location.href = 'index.html'
    
          }else{
            document.location.href = '../index.html'
          }
      }
    }
  }
  

};



initiation();
