let numeroAleatorio = parseInt(Math.random()* 10)+1;
console.log("Número obtenido", numeroAleatorio);
let num, intentos = 10;
var contador = 0
function adivinarNumero(){
    contador++
    var num = document.getElementById('num').value;
    if (numeroAleatorio == num){
        document.getElementById('text').innerHTML = 'Has acertado, eres un campeón!!! ';
      } else if (numeroAleatorio <num) {
        document.getElementById('text').innerHTML = 'Muy alto ';
      }
      else{
        document.getElementById('text').innerHTML = 'Muy bajo';
      }
      document.getElementById('contador').innerHTML = contador;
}