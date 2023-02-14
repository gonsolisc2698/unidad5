function addTask() {
    // Captura lo que dice el usuario
    var tarea = document.getElementById('taskInput').value;
    console.log('tare', tarea);
    
    // Mostrarlo por pantalla
    // var etiquetaP = document.createElement('p');
    // // Opt1
    // etiquetaP.innerHTML = tarea;
    // // Opt2
    // etiquetaP.append(tarea);
    // document.body.append(etiquetaP);
    // Mostrar tareas en forma de lista
    var tareaLi = document.createElement('li');
    // tareaLi.innerHTML = tarea;
    var check = document.createElement('input');
    // Opt 1
    // check.type = 'checkbox';
    // Opt 2
    check.setAttribute('type', 'checkbox');
    tareaLi.appendChild(check)
    tareaLi.append(tarea)
    
    // Rellenarla con tareas (li)
    var listaTarea = document.getElementById('listaTareas'); // Elemento ul del HTML
    listaTarea.appendChild(tareaLi);
}
