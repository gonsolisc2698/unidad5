document.getElementById("Guardar").addEventListener("click", function(){
    alert("Guardado");
  });
  
  // Cambiar color
  document.getElementById("Nombre").addEventListener("focus", function(){
    document.getElementById("Nombre").style.backgroundColor = "yellow";
  });
  document.getElementById("Nombre").addEventListener('focusout', quitarColor);
        function quitarColor(){
            document.getElementById("Nombre").style.backgroundColor='';
        };

  
//   // Vocal - Consonante
document.getElementById("letra").addEventListener("input", function(){
let valor = document.getElementById("letra").value;
   if (valor.length === 1) {
     let vocales = "aeiouAEIOU";
     if (vocales.includes(valor)) 
          document.getElementById("letra").style.backgroundColor = "blue";
     } else {
          document.getElementById("letra").style.backgroundColor = "red";
            }
});

// Utilizando lo que pulsa el usuario 
var inputLetras = document.getElementsByTagName('input')[1];
inputLetras.addEventListener('keydown', vocales);
function vocales(event) {
    console.log('event', event);
    // Opcion 1: comparando y usando OR
    // if (event.keyCode == 65 || event.keyCode ==  69 || event.keyCode == 79 || event.keyCode == 73 || event.keyCode == 85) {
    
    const vocales = [65, 69, 79, 73, 85];
    // Opcion2: Función includes para comparar el array de vocales
    // if (vocales.includes(event.keyCode) === true) { 
    // Opcion 3: Función indexOf para comparar el array de vocales. Devuelve la posición en el array o -1 si no está incluido
    if (vocales.indexOf(event.keyCode) !== -1 ) {
        inputLetras.style.color = 'red';
    } else {
        inputLetras.style.color = 'green';
    }
}
// Prueba con valor del input
const test = document.getElementById('test');
test.addEventListener('keyup', checkLetter);
function checkLetter() {
    let value = test.value;
    console.log('test', value);
    if (value === 'a') {
        test.style.backgroundColor = 'orange'
    } else {
        test.style.backgroundColor = 'pink'
    }
}


