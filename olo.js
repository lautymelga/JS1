let nombre, nota1, nota2, nota3;
nombre = prompt('Hola! ¿Como es tu nombre?')
nota1 = prompt('Ingrese 1ra. nota:');
nota2 = prompt('Ingrese 2da. nota:');
nota3 = prompt('Ingrese 3ra. nota:');
nota1 = parseInt(nota1);
nota2 = parseInt(nota2);
nota3 = parseInt(nota3);
let promedio;
promedio = (nota1 + nota2 + nota3) / 3;
if (promedio >= 7) {
    alert(nombre + ' tu promedio es ' + promedio.toFixed(2) + ' (TEA) vas muy bien, seguí asi')
} else {
    if (promedio >= 4) {
        alert(nombre + ' tu promedio es ' + promedio.toFixed(2) + ' (TEP) vas bien pero te falta mejorar')
    } else {
        alert(nombre + ' tu promedio es ' + promedio.toFixed(2) + '(TED) falta mejorar, hay que meterle pilas')
    }
}




