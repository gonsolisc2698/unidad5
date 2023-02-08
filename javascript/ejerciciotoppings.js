const helado = 1.90;
const toppingO = 1;
const toppingKITK = 1.50;
const toppingbrow = 0.75;
const lacasitos = 0.96;


// Guardar en una variable lo que pone el usuario
// Comparar lo que ha puesto el usuario con  las opciones if(heladores === 'kitkat')
// sabiendo que ha pedido, calculamos precio
var precio;

var heladores = prompt ("Introduce el topping del helado y te diré cuánto te cuesta");
if (heladores === 'normal') {
    console.log("El helado es sin topping")
}
else if (heladores === 'kitkat') {
    precio=helado + toppingKITK
    alert('el precio del helado con kitkat es '+precio+ '€')
}
else if (heladores ==='oreo') {
    precio=helado + toppingO
    alert('el precio del helado con oreo es '+ precio+'€')
    
}
else if (heladores === 'brownie'){
    precio=helado + toppingbrow
    alert('el precio del helado con brownie es '+ precio+'€')
}
else if (heladores === 'lacasitos'){
    precio=helado + lacasitos
    alert('el precio del helado con lacasitos es '+ precio+'€')
}
 else {
        alert("Lo sentimos, no tenemos este topping.");
    }

