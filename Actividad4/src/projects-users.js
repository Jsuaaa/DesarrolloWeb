document.addEventListener('DOMContentLoaded', () => {
const participantesSelect = document.getElementById('participantes');

// Obtener usuarios del localStorage
const usuariosGuardados = JSON.parse(localStorage.getItem('usuarios')) || [];

// Limpiar opciones actuales por si acaso
participantesSelect.innerHTML = '';

// Agregar cada usuario como opción
usuariosGuardados.forEach(usuario => {
    const option = document.createElement('option');
    option.value = usuario.identificacion;
    option.textContent = `${usuario.nombres} ${usuario.apellidos}`;
    participantesSelect.appendChild(option);
});
});
