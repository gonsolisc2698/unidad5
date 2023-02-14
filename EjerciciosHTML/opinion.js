function capturartexto(){
    var texto = document.getElementById("opinion").value;
    document.getElementById("rellenar").innerHTML = opinion;


}
//controle lo que escriba el usario
var textarea = document.getElementById('opinion').value;
textarea.addEventListener('keyup', ckeckenter);


//controlar solo cuando usa el enter keycode= enter (13)
function ckeckenter(evt){
    if (evt.keyCode===13){
        capturartexto();
    }
}

//llamar a la función que pinta en  pantalla - capturar texto()