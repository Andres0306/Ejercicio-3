var palabras = [];
var palabra;

do {
    palabra = prompt("Ingrese una palabra (deje vacío para terminar la captura):");

    if (palabra !== "") {
        palabras.push(palabra);
    }
} while (palabra !== "");

var resultado = palabras.join(" ");
console.log("Concatenación de las palabras:", resultado);

// Mostrar el resultado en el cuerpo del documento HTML
document.write("<h2>Concatenación de las palabras:</h2>");
document.write(resultado);