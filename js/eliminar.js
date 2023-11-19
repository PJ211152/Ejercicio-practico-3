const btnBuscar = document.getElementById("btnBuscar");
const input = document.getElementById("inputBusqueda");
const container = document.getElementById("idContainerUserEliminate");
let btnEliminar;

let index;

function obtenerUsuario(username) {
  const users = JSON.parse(localStorage.getItem("usuarios"));
  let userNet;

  for (let i = 0; i < users.length; i++) {
    let userNet = users[i];

    if (username == userNet.username) {
      user = userNet;
      return user;
    }
  }
}

function obtenerIndex(username) {
    const users = JSON.parse(localStorage.getItem("usuarios"));
    let userNet;
  
    for (let i = 0; i < users.length; i++) {
      let userNet = users[i];
  
      if (username == userNet.username) {
        user = userNet;
        return i;
      }
    }
  }

function eliminar() {
  const users = JSON.parse(localStorage.getItem("usuarios"));
  if(index != 0){
    users.splice(index);
    alert('Usuario eliminado con exito');
    localStorage.setItem('usuarios',JSON.stringify(users));
    window.location.href = 'eliminar.html'
  }else{
    alert('No puede eliminar al admin')
  }
  console.log(users);
}

function escribir(user) {
  if (user != null) {
    container.innerHTML = `
        <div class='container_E'>
            <h3 class="fontCenter">Informacion del usuario</h3>
            <p><span class="fontBold">Nombre:</span> ${user.name}</p>
            <p><span class="fontBold">Apellidos:</span> ${user.lastname}</p>
            <p><span class="fontBold">Nombre de usuario:</span> ${user.username}</p>
            <p><span class="fontBold">Edad:</span> ${user.age}</p>
            <p><span class="fontBold">Email:</span> ${user.email}</p>     
            <div class="fontCenter">
                <button class="btn btn-danger" id="btnEliminar">Eliminar</button>
            </div>
        </div>
        `;
    btnEliminar = document.getElementById("btnEliminar");

    if (btnEliminar != null) {
      btnEliminar.onclick = function () {
        eliminar();
      };
    }
  } else {
    container.innerHTML = `
        <div class='container_U'>
            <p class="fontCenter">El usuario no existe</p>        
        </div>
        `;
  }
}

btnBuscar.onclick = function () {
  if (input.value != "" && input.value != null) {
    let busqueda = obtenerUsuario(input.value);
    index = obtenerIndex(input.value);
    escribir(busqueda);
    console.log(busqueda);
  } else {
    alert("Porfavor introduzca un nombre");
  }
};
