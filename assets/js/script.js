window.addEventListener("load", inicio, true);

function inicio() {
    let textNombre = document.getElementById('nombre');

    textNombre.innerHTML = `Bienvenid@
    ${localStorage.getItem('nombre')}`;
    
    document.getElementById("mensaje").addEventListener('input', function() {
        this.value = this.value.toUpperCase();
    });
    
    document.getElementById("btn-encriptar").addEventListener('click', function() {
        encriptar();
    });
    
    document.getElementById("btn-desencriptar").addEventListener('click', function() {
            desencriptar();
    });

}

function encriptar() {
    console.log("hola");
    // Definimos la contraseña correcta del sistema y un mensaje de error para las contraseñas incorrectas.
    var passSistema = "agosto19";
    var msgError = "Error en la contraseña, vuelve a intentarlo";

    // Obtenemos el mensaje a encriptar y la contraseña ingresada por el usuario desde los elementos HTML con id "msg" y "pass".
    var mensaje = document.getElementById("mensaje").value;
    //var password = document.getElementById("pass").value;

    //creamos el arreglo donde se guarda el abecedario
    let arrALFA = Array.from(26);
    arrALFA[0] = "A"; arrALFA[1] = "B"; arrALFA[2] = "C"; arrALFA[3] = "D"; arrALFA[4] = "E";
    arrALFA[5] = "F"; arrALFA[6] = "G"; arrALFA[7] = "H"; arrALFA[8] = "I"; arrALFA[9] = "J";
    arrALFA[10] = "K"; arrALFA[11] = "L"; arrALFA[12] = "M"; arrALFA[13] = "N"; arrALFA[14] = "O";
    arrALFA[15] = "P"; arrALFA[16] = "Q"; arrALFA[17] = "R"; arrALFA[18] = "S"; arrALFA[19] = "T";
    arrALFA[20] = "U"; arrALFA[21] = "V"; arrALFA[22] = "W"; arrALFA[23] = "X"; arrALFA[24] = "Y";
    arrALFA[25] = "Z";


    //creamos e inicializamos variables
    var letraOri = "";
    var letraEnc = "";
    var mensajeEncri = "";
    var numeroDes = 3;
    var indiceAux;

    //Creamos un arreglo para almacenar el mensaje a encriptar
    let arrMensaje = Array.from(mensaje);

    // Comprobamos si la contraseña ingresada por el usuario coincide con la contraseña del sistema.

    //Recorremos el arreglo del memsaje a encriptar
    for (let i = 0; i < arrMensaje.length; i++) {

        //obtenemos el dato de cada letra del arreglo mensaje a encriptar
        letraOri = arrMensaje[i];
        letraEnc = letraOri;

        //REcorremos el arreglo del abecedario a comparar
        for (let j = 0; j < arrALFA.length; j++) {

            //si la letra original encuentra su valor en el arreglo del abecedario
            if (letraOri == arrALFA[j]) {
                //calculamos el indice auxiliar (sumamos el valor de j mas el numero de desplazamientos) segun encriptacion cesar
                indiceAux = j + numeroDes;
                //si el indice es mayor o igual al tamaño del abcedario, es decir que el indice auxiliar es no se encomtraria en el arreglo del abecedario
                if (indiceAux >= arrALFA.length) {
                    //obtenemos la letra encriptaba con el residuo de indiceAux entre el tamaño del arreglo del abecedario
                    letraEnc = arrALFA[indiceAux % arrALFA.length];
                } else {
                    //si el indice esta en el arreglo del abecedario
                    //obtenemos la letra encriptada con la suma del indice auxilar
                    letraEnc = arrALFA[indiceAux];
                }

            }

        }
        //armamos letra por letra el mensaje encriptado
        mensajeEncri = mensajeEncri + letraEnc;
        //limpiamos 
        letraEnc = "";
        letraOri = "";
        //console.log(mensajeEncri);
    }

    //Enviamos el mesanje encriptado
    document.getElementById("msgEncriptado").innerHTML = mensajeEncri;
}

function desencriptar() {

    // Obtenemos el mensaje encriptado desde el elemento HTML con id "msgCodigo".
    var mensajeCodigo = document.getElementById("msgEncriptado").value;
    console.log(mensajeCodigo);

    //creamos el arreglo donde se guarda el abecedario
    let arrALFA = Array.from(26);
    arrALFA[0] = "A"; arrALFA[1] = "B"; arrALFA[2] = "C"; arrALFA[3] = "D"; arrALFA[4] = "E";
    arrALFA[5] = "F"; arrALFA[6] = "G"; arrALFA[7] = "H"; arrALFA[8] = "I"; arrALFA[9] = "J";
    arrALFA[10] = "K"; arrALFA[11] = "L"; arrALFA[12] = "M"; arrALFA[13] = "N"; arrALFA[14] = "O";
    arrALFA[15] = "P"; arrALFA[16] = "Q"; arrALFA[17] = "R"; arrALFA[18] = "S"; arrALFA[19] = "T";
    arrALFA[20] = "U"; arrALFA[21] = "V"; arrALFA[22] = "W"; arrALFA[23] = "X"; arrALFA[24] = "Y";
    arrALFA[25] = "Z";

    //creamos e inicializamos variables
    var letraOri = "";
    var letraEnc = "";
    var decrypted = "";
    var numeroDes = 3;
    var indiceAux;

    //Creamos un arreglo para almacenar el mensaje a desencriptar
    let arrMensaje = Array.from(mensajeCodigo);

    //Recorremos el arreglo del memsaje encriptado
    for (let i = 0; i < arrMensaje.length; i++) {
        //obtenemos el dato de cada letra del arreglo mensaje a desencriptar
        letraEnc = arrMensaje[i];
        letraOri = letraEnc;

        //Recorremos el arreglo del abecedario a comparar
        for (let j = 0; j < arrALFA.length; j++) {
            //si la letra encriptada encuentra su valor en el arreglo del abecedario
            if (letraEnc == arrALFA[j]) {
                //calculamos el indice auxiliar (el valor de j menos el numero de desplazamientos)
                indiceAux = j - numeroDes;
                letraOri = arrALFA[indiceAux];

            }
        }
        //armamos letra por letra el mensaje desencriptado
        decrypted = decrypted + letraOri;

        //limpiamos 
        letraEnc = "";
        letraOri = "";


    }
    console.log(decrypted);
    document.getElementById("msgEncriptado").innerHTML = decrypted;
}