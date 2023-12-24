var numero1 = parseInt(prompt("Ingrese el primer número entre 1 y 50:"));
var numero2 = parseInt(prompt("Ingrese el segundo número entre 1 y 50:"));

if (Number.isInteger(numero1) && Number.isInteger(numero2) && numero1 >= 1 && numero1 <= 50 && numero2 >= 1 && numero2 <= 50) {
    console.log("Números del 1 al 50 '¡Lotería!' según los números ingresados:");

    var contador = 1;

    while (contador <= 50) {
        if (contador === numero1 || contador === numero2) {
            console.log(contador + " ¡Lotería!");
        } else {
            console.log(contador);
        }
        contador++;
    }
} else {
    console.log("Por favor, asegúrese de ingresar dos números enteros entre 1 y 50.");
}