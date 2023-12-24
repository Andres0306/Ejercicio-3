var dia;

while (true) {
    dia = prompt("Ingresa un día de la semana:");

    if (dia !== null) {
        dia = dia.toLowerCase();

        switch (dia) {
            case "lunes":
                alert("¡Feliz inicio de semana! Recuerda: 'La ciencia es un ámbito maravilloso y creativo que nos da alegría y emoción'. - Stephen Hawking");
                break;
            case "martes":
                alert("¡Martes! 'No puedes poner límites a algo que no tiene fin'. - Stephen Hawking");
                break;
            case "miércoles":
            case "miercoles":
                alert("¡Mitad de semana! 'La ciencia no es solo un cuerpo de conocimiento, sino una manera de pensar'. - Carl Sagan");
                break;
            case "jueves":
                alert("¡Jueves! 'El día que dejemos de explorar será el día que abandonemos la humanidad'. - Neil deGrasse Tyson");
                break;
            case "viernes":
                alert("¡Viernes! 'La imaginación es más importante que el conocimiento'. - Albert Einstein");
                break;
            case "sábado":
            case "sabado":
                alert("¡Sábado! 'La ciencia nos lleva a comprender el universo y nuestras relaciones en él'. - William Shatner");
                break;
            case "domingo":
                alert("¡Descansa y relájate! 'No puedes hacer nada para cambiar el pasado, pero puedes hacer mucho para cambiar el futuro'. - Albert Einstein");
                break; // Finaliza la ejecución del programa
            default:
                alert("Por favor, ingresa un día de la semana válido.");
        }
    } else {
        alert("¡Hasta luego!");
        break; // Finaliza el bucle while
    }
}