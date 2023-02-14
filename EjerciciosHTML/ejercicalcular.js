function calcular() {
     var numerosInput = document.getElementById('inputNumbers').value.split(",");
     console.log('numerosInput', numerosInput);
     var numeros = numerosInput.map(function(number) {
         return parseInt(number);
     });
     // Función flecha
     // var numeros = numerosInput.map((number) => parseInt(number));
     
     console.log('numeros', numeros);
     // Suma
     var suma = 0;
     for (let i = 0; i < numeros.length; i++ ) {
         suma += numeros[i]; 
     }
     document.getElementById('resultadoSuma').innerHTML = 'El resultado de la suma es ' + suma;
     // Media
     var media = (suma / numeros.length).toFixed(2);
     document.getElementById('resultadoMedia').innerHTML = 'El resultado de la media es ' + media;
     // Máximo
     // var max = Math.max(...numeros)
     // console.log(max)
     var max = numeros[0]; 
     for (let i = 0; i < numeros.length; i++) {
         if (max < numeros[i]) {
             max = numeros[i];
         } 
     }
     document.getElementById('resultadoMax').innerHTML = 'El mayor valor es ' + max;
     // Mínimo
     var min = numeros[0]; 
     for (let i = 0; i < numeros.length; i++) {
         if (min > numeros[i]) {
             min = numeros[i];
         } 
     }
     document.getElementById('resultadoMin').innerHTML = 'El mínimo valor es ' + min;
 }
 function reiniciar() {
     document.getElementById('inputNumbers').value = '';
     document.getElementById('resultadoSuma').innerHTML = '';
     document.getElementById('resultadoMedia').innerHTML = '';
     document.getElementById('resultadoMax').innerHTML = '';
     document.getElementById('resultadoMin').innerHTML = '';
 }
 function cargar(){
     document.getElementById('inputNumbers').value = "1,2,3"
 }