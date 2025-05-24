document.addEventListener('DOMContentLoaded', () => {
const usuariosContainer = document.getElementById('usuariosContainer');
const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

if (usuarios.length === 0) {
usuariosContainer.innerHTML = `
    <div class="bg-gray-800 text-white text-center py-6 rounded-lg shadow-md">
    No hay participantes registrados.
    </div>`;
return;
}

usuarios.forEach((usuario, index) => {
const card = document.createElement('div');
card.className = 'p-4 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm dark:bg-gray-800 bg-white text-white';
card.innerHTML = `
    <h3 class="text-xl font-semibold mb-2">Participante ${index + 1}</h3>
    <p><span class="font-medium">Identificación:</span> ${usuario.identificacion}</p>
    <p><span class="font-medium">Nombres:</span> ${usuario.nombres}</p>
    <p><span class="font-medium">Apellidos:</span> ${usuario.apellidos}</p>
    <p><span class="font-medium">Email:</span> ${usuario.email}</p>
    <p><span class="font-medium">Celular:</span> ${usuario.celular}</p>
`;
usuariosContainer.appendChild(card);
});
});