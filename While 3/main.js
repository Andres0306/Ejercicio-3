var numeros = [];
var numero;

do {
    numero = parseInt(prompt("Ingrese un número (ingrese 0 para terminar):"));

    if (!isNaN(numero) && numero !== 0) {
        numeros.push(numero);
    }
} while (numero !== 0);

// Mostrar los números en la consola
console.log("Números capturados:", numeros);

// Mostrar los números en el cuerpo del documento HTML
var tituloNumerosCapturados = document.getElementById("tituloNumerosCapturados");
var listaNumeros = document.createElement("ul");

for (var i = 0; i < numeros.length; i++) {
    var elementoLista = document.createElement("li");
    elementoLista.textContent = numeros[i];
    listaNumeros.appendChild(elementoLista);
}

document.body.insertBefore(listaNumeros, tituloNumerosCapturados.nextSibling);