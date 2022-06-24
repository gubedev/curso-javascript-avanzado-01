// LIFO Last in - Firt out
/**
 *  [function N]
 *  ...
 *  [function 2]
 *  [function 1]
 *  [Contexto global]
 */

// Ejemplo 1

function pruebaUno() {
  return "Prueba Pila de ejecución";
}

function pruebaDos() {
  console.log(pruebaUno());
}

pruebaDos();

/**
 *  [Contexto global]
 *
 *  [pruebaDos]
 *  [Contexto global]
 *
 *  [pruebaUno]
 *  [pruebaDos]
 *  [Contexto global]
 *
 *  [pruebaDos]
 *  [Contexto global]
 *
 *  [Contexto global]
 */

// Ejemplo 2

function crearContexto(iteraciones) {
  if (iteraciones === 0) return;
  crearContexto(--iteraciones);
}

crearContexto(3);
