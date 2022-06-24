# Fases de ejecución

Los contextos de ejecución tienen dos fases.

- Fase de creación, aqui el motor de javascript coloca en memoria variables y funciones.

- Fase de ejecución, donde el código se ejecuta línea por línea. Las fases de ejecución son diferentes según el tipo de contexto que estemos observando.

## Creción del contexto global

- Primer paso creación del objeto global, si estamos ejecutando javascritp desde un browser

```

objeto global = window

```

- Segundo paso crear el objeto this y referenciarlo al objeto global.

```

this = window

```

- Tercer paso colocar en memória todas las variables declaradas con el keyword var y la funciones declaradas (function statments).

```

prueba();

temp = 5;

var temp;

function prueba() {
    return 5;
}

```

El código anterior es organizado por el motor de javascript de la siguiente manera.

```

var temp = undefined;

function prueba() {
    return 5;
}

prueba();

temp = 5;

```

## Creción del contexto función

- Primer paso crear el objeto this y referenciarlo al objeto que invoco la función. Si no existe se referencia la objeto windows.

```
function prueba() {
    console.log(this);
}

prueba();

// imprime window

document.getElementById("boton").addEventListener("click", handlerClick);

function handlerClick() {
    console.log(this);
    // imprime la instancia del boton
}

```

- Segundo paso crear un objeto "argument" con los argumentos de la función.

```

function otraFunction(a, b) {
    console.log(arguments);
}

otraFunction(1,2);

// imprime arguments(2)[1,2]

```

- Tercer paso colocar en memória todas las variables declaradas con el keyword var y la funciones declaradas (function statments).

## Fases de ejecución

- En esta fase el código se ejecuta línea por línea.
- Cuando una función finaliza su ejecución, el contexto y todas sus variables son eliminadas de memória. (Cuando estamos en el contexto global las variables permanecen en memoria a lo largo de la ejecución del programa).
