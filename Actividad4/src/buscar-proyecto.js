document.addEventListener('DOMContentLoaded', () => {
   const buscador = document.getElementById('buscador');
   const resultados = document.getElementById('resultados');

   const proyectos = JSON.parse(localStorage.getItem('proyectos')) || [];

   function mostrarResultados(filtrados) {
      resultados.innerHTML = '';

      if (filtrados.length === 0) {
         resultados.innerHTML = '<p class="text-gray-700 dark:text-white">No se encontraron proyectos.</p>';
         return;
      }

      filtrados.forEach(p => {
         const div = document.createElement('div');
         div.className = 'p-4 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm dark:bg-gray-800 bg-white';

         div.innerHTML = `
            <h2 class="text-xl font-bold text-gray-800 dark:text-white mb-2">${p.nombre}</h2>
            <p class="text-gray-700 dark:text-gray-300 mb-1"><strong>ID:</strong> ${p.id}</p>
            <p class="text-gray-700 dark:text-gray-300 mb-1"><strong>Descripción:</strong> ${p.descripcion}</p>
            <p class="text-gray-700 dark:text-gray-300 mb-1"><strong>Fecha:</strong> ${p.fechaInicio} - ${p.fechaFinal}</p>
            <p class="text-gray-700 dark:text-gray-300 mb-1"><strong>Valor:</strong> $${p.valor}</p>
            <p class="text-gray-700 dark:text-gray-300"><strong>Participantes:</strong> ${
               p.participantes.map(part => typeof part === 'object' ? `${part.nombres} ${part.apellidos}` : part).join(', ')
            }</p>
         `;

         resultados.appendChild(div);
      });
   }

   // Evento input para buscar en tiempo real
   buscador.addEventListener('input', () => {
      const texto = buscador.value.toLowerCase();
      const filtrados = proyectos.filter(p => p.nombre.toLowerCase().includes(texto));
      mostrarResultados(filtrados);
   });

   // Mostrar todos al principio
   mostrarResultados(proyectos);
});
