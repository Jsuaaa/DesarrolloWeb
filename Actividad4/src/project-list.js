const lista = document.getElementById('listaProyectos');
const proyectos = JSON.parse(localStorage.getItem('proyectos')) || [];

if (proyectos.length === 0) {
lista.innerHTML = '<p class="text-gray-700 dark:text-white">No hay proyectos aún.</p>';
} else {
proyectos.forEach(p => {
    const div = document.createElement('div');
    div.className = 'p-4 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm dark:bg-gray-800 bg-white';

    div.innerHTML = `
    <h2 class="text-xl font-bold text-gray-800 dark:text-white mb-2">${p.nombre}</h2>
    <p class="text-gray-700 dark:text-gray-300 mb-1"><strong>ID:</strong> ${p.id}</p>
    <p class="text-gray-700 dark:text-gray-300 mb-1"><strong>Descripción:</strong> ${p.descripcion}</p>
    <p class="text-gray-700 dark:text-gray-300 mb-1"><strong>Fecha:</strong> ${p.fechaInicio} - ${p.fechaFinal}</p>
    <p class="text-gray-700 dark:text-gray-300 mb-1"><strong>Valor:</strong> $${p.valor}</p>
    <p class="text-gray-700 dark:text-gray-300"><strong>Participantes:</strong> ${p.participantes.join(', ')}</p>
    `;
    lista.appendChild(div);
});
}
