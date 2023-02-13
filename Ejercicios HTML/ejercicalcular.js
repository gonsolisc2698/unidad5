var resultadoSuma = 0;
var resultadomedia = 0;


function calcular(){
    var nums = [3, 4, 5];
//  Sumar
   for(let i=0; i<nums.length; i++) {
        resultadoSuma += nums[i]
        console.log('1', resultadoSuma)
   }
   for (let i=0; i<nums.length; i++){
        resultadomedia === nums[i/nums.length]
        console.log('1', resultadomedia)
   }

   document.getElementById('resultSuma').innerHTML = 'El resultado de la suma es ' + resultadoSuma
   console.log(resultadoSuma)
   document.getElementById('resultmedia').innerHTML='El resultado de la media es '+ resultadomedia
   console.log(resultadomedia)
//    document.write('el resultado de la suma es '+resultadoSuma)
}