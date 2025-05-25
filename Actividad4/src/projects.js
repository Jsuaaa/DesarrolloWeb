const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
e.preventDefault();

const id = document.getElementById('id').value;
const nombre = document.getElementById('nombre').value;
const descripcion = document.getElementById('descripcion').value;
const fechaInicio = document.getElementById('fechaInicio').value;
const fechaFinal = document.getElementById('fechaFinal').value;
const valor = document.getElementById('valor').value;
const participantesSelect = document.getElementById('participantes');
const usuariosGuardados = JSON.parse(localStorage.getItem('usuarios')) || [];

const participantes = Array.from(participantesSelect.selectedOptions).map(opt => {
    return usuariosGuardados.find(u => u.identificacion === opt.value);
});


const proyecto = {
    id,
    nombre,
    descripcion,
    fechaInicio,
    fechaFinal,
    valor,
    participantes
};

// Obtener los proyectos existentes del localStorage
const proyectos = JSON.parse(localStorage.getItem('proyectos')) || [];

// Agregar el nuevo proyecto
proyectos.push(proyecto);

// Guardar en localStorage
localStorage.setItem('proyectos', JSON.stringify(proyectos));

alert('Proyecto guardado exitosamente');
form.reset();
});