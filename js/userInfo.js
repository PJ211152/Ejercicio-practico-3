const container = document.getElementById("idContainerInfo");

function mostrarInfo() {
    const info = JSON.parse(localStorage.getItem('sesion'));
  if(info != null){
    container.innerHTML = `
    <div class="row">
        <div class="col-6">
        <p><span class="fontBold">Nombre:</span> ${info.name}</p>
        </div>
        <div class="col-6">
        <p><span class="fontBold">Apellido:</span> ${info.lastname}</p>
        </div>
    </div>
    <div class="row">
        <div class="col-6">
        <p><span class="fontBold">Nombre de usuario:</span> ${info.username}</p>
        </div>
        <div class="col-6">
        <p><span class="fontBold">Edad:</span> ${info.age}</p>
        </div>
    </div>
    <div class="row">
        <div class="col-12">
        <p><span class="fontBold">Email:</span> ${info.email}</p>
        </div>
    </div>
    `;
  }else{
    container.innerHTML = `<div class="fontCenter"> Que haces por aqui? </div>`
  }
}

mostrarInfo();
