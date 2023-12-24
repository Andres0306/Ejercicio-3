var numero = parseInt(prompt("Ingrese un número entero:"));
var contador = 1;

console.log("Números múltiplos de 5 hasta " + numero + ":");

while (contador <= numero) {
    if (contador % 5 === 0) {
        console.log(contador);
    }
    contador++;
}