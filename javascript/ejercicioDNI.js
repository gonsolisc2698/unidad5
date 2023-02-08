var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
var numero = prompt ("Introduce el numero de tu DNI sin la letra");
if (numero<0 || numero > 99999999){
    alert ("El número indicado no es valido")
}
else {
    var letraCalculada = letras[numero%23];
    alert ("La letra calculada es: "  + letraCalculada)
}
