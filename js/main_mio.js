const nombre = document.querySelector("#nombre").value;

const $botónEnviar = document.querySelector("#enviar-carta");

const contieneSoloLetras = true;
const contieneSoloLetrasYNúmeros = true;

function validarNombre(nombre) {
  if (nombre.length === 0) {
    return "Este campo debe tener al menos un caracter.";
  }
  if (nombre.length >= 50) {
    return "Este campo debe tener menos de 50 caracteres.";
  }
  if (contieneSoloLetras != /^[A-z]+$/.test(nombre)) {
    return "El nombre debe contener sólo letras.";
  } else {
    return "";
  }
}

function validarCiudad(ciudad) {
  if (ciudad.length === 0) {
    return "El campo ciudad no puede estar vacío.";
  } else {
    return "";
  }
}

function validarDescripciónRegalo(descripción) {
  if (descripción.length >= 100) {
    return "La descripción del regalo no puede contener más de 100 caracteres.";
  }
  if (descripción === "") {
    return "La descripción del regalo no puede estar vacía.";
  }
  if (contieneSoloLetrasYNúmeros != /^[A-z0-9]+$/.test(descripción)) {
    return "La descripción del regalo sólo debe contener letras y números.";
  } else {
    return "";
  }
}

function validarFormulario(event) {
  const $formulario = document.querySelector("#carta-a-santa");

  const nombre = $formulario.nombre.value;
  const ciudad = $formulario.ciudad.value;
  const descripciónRegalo = document.querySelector("[name=descripcion-regalo]")
    .value;

  const errorNombre = validarNombre(nombre);
  const errorCiudad = validarCiudad(ciudad);
  const errorDescripciónRegalo = validarDescripciónRegalo(descripciónRegalo);

  const errores = {
    nombre: errorNombre,
    ciudad: errorCiudad,
    "descripcion-regalo": errorDescripciónRegalo,
  };

  const esExito = manejarErrores(errores) === 0;
  if (esExito) {
    $formulario.className = "oculto";
    document.querySelector("#exito").className = "";

    setTimeout(function () {
      window.location.href = "wishlist.html";
    }, 5000);
  }
  event.preventDefault();
}

function manejarErrores(errores) {
  const keys = Object.keys(errores);
  const $errores = document.querySelector("#errores");
  let cantidadErrores = 0;
  $errores.innerHTML = "";

  keys.forEach(function (key) {
    const error = errores[key];
    if (error) {
      $formulario[key].className = "error";
      const $contieneError = document.createElement("li");
      $contieneError.id = `error-${key}`;
      $contieneError.innerText = error;
      $errores.appendChild($contieneError);
      cantidadErrores++;
    } else {
      $formulario[key].className = "";
    }
  });
  return cantidadErrores;
}
const $formulario = document.querySelector("#carta-a-santa");
$formulario.onsubmit = validarFormulario;
