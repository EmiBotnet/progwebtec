
function obtenerDatos() {
    let nombre = document.getElementById("NombreIn").value;
    let primerApellido = document.getElementById("primerApellidoIn").value;
    let segundoApellido = document.getElementById("segundoApellidoIn").value;
    let fechaNacimiento = document.getElementById("fechaNacimientoIn").value;
    
    // Obtener género seleccionado
    let genero = document.querySelector('input[name="genero"]:checked');
    let generoSeleccionado = genero ? genero.value : "No seleccionado";

    let entidadFederativa = document.getElementById("entidadFedIn").value

    console.log("Nombre:", nombre);
    console.log("Primer Apellido:", primerApellido);
    console.log("Segundo Apellido:", segundoApellido);
    console.log("Fecha de Nacimiento:", fechaNacimiento);
    console.log("Género:", generoSeleccionado);
    console.log("Entidad Federativa:", entidadFederativa);

    alert("Se ha registrado correctamente!");
}
