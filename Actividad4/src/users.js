document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault(); // Evita el envío tradicional del formulario

  const usuario = {
    identificacion: document.getElementById("identificacion").value,
    nombres: document.getElementById("nombres").value,
    apellidos: document.getElementById("apellidos").value,
    email: document.getElementById("email").value,
    celular: document.getElementById("celular").value
  };

  // Obtener usuarios existentes o inicializar un array vacío
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  // Agregar nuevo usuario
  usuarios.push(usuario);

  // Guardar de nuevo en localStorage
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  // Opcional: limpiar el formulario
  e.target.reset();

  alert("Participante guardado correctamente.");
});
