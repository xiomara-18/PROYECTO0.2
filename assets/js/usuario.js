// Asignamos el evento de click al anchor
document.getElementById('button').addEventListener('click', obtenerNombre);

function obtenerNombre() {
  // Obtenemos el valor del input
  let nombre = document.getElementById('nombre').value;
  // Almacenamos en almacenamiento local
  // Indicamos el nombre y el valor
  localStorage.setItem('nombre', nombre);
}


/*function pintarNombre() {
  document.getElementById("saludo").innerHTML += localStorage.getItem("name"); 
}

pintarNombre()
*/