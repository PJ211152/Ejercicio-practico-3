const btnRegister = document.getElementById("btnRegistrar");

const inputName = document.getElementById("idNombre");
const inputSurname = document.getElementById("idApellido");
const inputUsername = document.getElementById("idNombreUsuario");
const inputNumber = document.getElementById("idEdad");
const inputLocation = document.getElementById("idDireccion");
const inputEmail = document.getElementById("idCorreo");
const inputPass = document.getElementById("idContrasena");
const inputPassrep = document.getElementById("idContrasenaRep");

btnRegister.onclick = function () {
  
    if (
      inputName.value != "" &&
      inputSurname.value != "" &&
      inputUsername.value != "" &&
      inputNumber.value != "" &&
      inputLocation.value != "" &&
      inputEmail.value != "" &&
      inputPass.value != ""
    ) {
      if (inputPassrep.value != "") {
        if (inputPass.value == inputPassrep.value) {
          if (inputPass.value.length >= 8) {

              const lista_usuario = JSON.parse(localStorage.getItem('usuarios'));
  
              const registro ={
                id: lista_usuario.length,
                name: `${inputName.value}`,
                lastname: `${inputSurname.value}`,
                username: `${inputUsername.value}`,
                age: parseInt(inputNumber.value),
                email: `${inputEmail.value}`,
                password: `${inputPass.value}`,
              }
  
              lista_usuario.push(registro);
              localStorage.setItem('usuarios', JSON.stringify(lista_usuario));
              alert('Usuario registrado');
              window.location.href = 'login.html';
  
          } else {
            alert("Contraseña insegura");
          }
        } else {
          alert("Las contraseñas no coinciden");
        }
      } else {
        alert("Por favor confirme su contraseña");
      }
    } else {
      alert("Por favor rellene todos los campos");
    }
};