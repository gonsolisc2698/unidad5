function comprobar() {
    // Capturar lo escrito por el usuario
    var fraseUsuario = document.getElementById('frase').value;
    var fraseMayus = fraseUsuario.toUpperCase();
    var fraseMinus = fraseUsuario.toLowerCase();
    
    // Comprobar si es mayúscula
    if (fraseUsuario === fraseMayus) {
        document.getElementById('resultado').innerHTML = 'Está en mayúscula';
    } else if (fraseUsuario === fraseMinus){
    // Comprobar si es minúscula
        document.getElementById('resultado').innerHTML = 'Está en minúscula';
    } else {
        document.getElementById('resultado').innerHTML = 'Está en minúscula y mayúscula'
    }
};