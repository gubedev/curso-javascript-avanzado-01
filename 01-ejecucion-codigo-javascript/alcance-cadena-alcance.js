// Ejemplo 1

var variableGlobal = "Hola variable global";

function saludoLocal() {
  var variableLocal = "Hola variable local";
  console.log(variableLocal);
}

function saludoGlobal() {
  console.log(variableGlobal);
}

console.log(variableGlobal);
saludoGlobal();
console.log(variableLocal);

// Ejemplo 2

var a = 1;
function primerFuncion() {
  var b = 2;
  function segundaFuncion() {
    var c = 2;
    var a = 30;
    function tercerFuncion() {
      console.log("Funcion 3 =>");
      console.log("variable a ", a);
      console.log("variable b ", b);
      console.log("variable c ", c);
    }
    tercerFuncion();
  }
  segundaFuncion();
  console.log("Function 1 =>");
  console.log("variable a ", a);
}
primerFuncion();

// Ejemplo 3

for (var i = 0; i < 10; i++) {}
console.log(i);

if (true) {
  var temp = "Saludos";
}

console.log(temp);
