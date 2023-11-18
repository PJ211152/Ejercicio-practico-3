const btnLogin = document.getElementById('btnLogin');
const idLoginCorreo = document.getElementById('idLoginCorreo');
const idLoginPass = document.getElementById('idLoginContrasena');

function obtenerUser(username, pass){
    const userList = JSON.parse(localStorage.getItem('usuarios'));
    let user;

    for(let i = 0; i< userList.length;i++){
        let userNet = userList[i];
        let errorcode = '';

        if(username == userNet.username){
            
            if(pass == userNet.password){
                user = userNet;
                return user;
            }else{
                errorcode = 'pass';
                return errorcode;
            }
        }
    }
}

btnLogin.onclick = function obtener(){
    const usuario = obtenerUser(idLoginCorreo.value, idLoginPass.value)

    if(usuario != null){
        if(usuario != 'pass'){
            alert(`bienvenido ${usuario.name}`)
            localStorage.setItem('sesion',JSON.stringify(usuario))
            document.location.href = '../index.html'
        }
    }else{
        alert('El usuario no existe');
    }
}