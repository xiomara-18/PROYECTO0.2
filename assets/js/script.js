function encriptar() {
    // Definimos la contraseña correcta del sistema y un mensaje de error para las contraseñas incorrectas.
    var passSistema = "agosto19";
    var msgError = "Error en la contraseña, vuelve a intentarlo";

    // Obtenemos el mensaje a encriptar y la contraseña ingresada por el usuario desde los elementos HTML con id "msg" y "pass".
    var mensaje = document.getElementById("msg").value;
    var password = document.getElementById("pass").value;

    // Comprobamos si la contraseña ingresada por el usuario coincide con la contraseña del sistema.
    if (passSistema == password) {
        // Si la contraseña es correcta, limpiamos cualquier mensaje de error.
        document.getElementById("error").innerHTML = "";

        // Encriptamos el mensaje usando Base64 con la función btoa() y lo mostramos en el elemento con id "demo1".
        var encryted = btoa(mensaje);
        document.getElementById("demo1").innerHTML = encryted;
    } else {
        // Si la contraseña es incorrecta, mostramos el mensaje de error en el elemento con id "error".
        document.getElementById("error").innerHTML = msgError;
    }
}

function desencriptar() {
    // Obtenemos el mensaje encriptado desde el elemento HTML con id "msgCodigo".
    var mensajeCodigo = document.getElementById("msgCodigo").value;

    // Desencriptamos el mensaje usando Base64 con la función atob() y lo mostramos en el elemento con id "demo2".
    var decrypted = atob(mensajeCodigo);
    document.getElementById("demo2").innerHTML = decrypted;
}
