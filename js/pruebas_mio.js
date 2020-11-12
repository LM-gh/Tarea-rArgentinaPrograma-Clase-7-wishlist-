function probarValidarNombre() {
  console.assert(
    validarNombre("") === "Este campo debe tener al menos un caracter.",
    "La función validarNombre no funcionó con un string vacío."
  );

  console.assert(
    validarNombre(
      "1111111111111111111111111111111111111111111111111111111111111111111111111111111111111"
    ) === "Este campo debe tener menos de 50 caracteres.",
    "La función validarNombre no validó que el nombre sea menor a 50 caracteres."
  );

  console.assert(
    validarNombre("Lautaro1") === "El nombre debe contener sólo letras.",
    "La función validarNombre no validó que el nombre tenga sólo letras."
  );

  console.assert(
    validarNombre("Lautaro") === "",
    "validarNombre falló con un nombre válido."
  );
}

function probarValidarCiudad() {
  console.assert(
    validarCiudad("") === "El campo ciudad no puede estar vacío.",
    "La función validarCiudad no mostró un error cuando la ciudad es vacía."
  );

  console.assert(
    validarCiudad("Buenos Aires") === "",
    "validarCiudad no funcionó con un nombre de ciudad válido."
  );
}

function probarValidarDescripciónRegalo() {
  console.assert(
    validarDescripciónRegalo(
      "asoduashufishauiwqdhuisdhsaiucahsviuashbfiuwhrqwuieashduaidasoduashufishauiwqdhuisdhsaiucahsviuashbfiuwhrqwuieashduaidahsashudiahsashudi"
    ) === "La descripción del regalo no puede contener más de 100 caracteres.",
    "La función validarDescripciónRegalo no pudo comprobar que la descripción no contenga más de 100 caracteres."
  );
  console.assert(
    validarDescripciónRegalo("") ===
      "La descripción del regalo no puede estar vacía.",
    "La función validarDescripciónRegalo no pudo validar que la descripción no esté vacía."
  );
  console.assert(
    validarDescripciónRegalo("Esta es la descripción de mi regalo$") ===
      "La descripción del regalo sólo debe contener letras y números.",
    "La función validarDescripciónRegalo no pudo validar que la descripción sólo contenga letras y números."
  );

  console.assert(
    validarDescripciónRegalo("Regalo") === "",
    "La función validarDescripción regalo no funcionó con una descripción correcta."
  );
}

probarValidarNombre();
probarValidarCiudad();
probarValidarDescripciónRegalo();
