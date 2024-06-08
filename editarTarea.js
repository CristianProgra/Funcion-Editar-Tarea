//funcion para editar una tarea
function editarTarea(button){
    let confirmar = confirm("¿Deseas editar esta tarea?");
    if(confirmar){
        let fila = button.parentElement.parentElement;
        let tareaActual = fila.cells[1].textContent;
        let nuevaTarea = prompt("Edita tu tarea:", tareaActual);
        if (nuevaTarea !== null && nuevaTarea !== "") {
            fila.cells[1].textContent = nuevaTarea;
        }
    }
}