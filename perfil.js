//FOTO PERFIL
  // Obtener los elementos del DOM
  const botonEditarFoto = document.getElementById('boton-para-foto');
  const inputFoto = document.getElementById('input-foto');
  const imagenArticle = document.getElementById('foto-principal-perfil');
  const imagenAside = document.getElementById('foto-barra-lateral');

  // Escuchar el click en el botón "Editar" para abrir el input de selección de archivos
  botonEditarFoto.addEventListener('click', function() {
    inputFoto.click(); // Simula el clic en el input oculto
  });

  // Cuando se selecciona una nueva imagen
  inputFoto.addEventListener('change', function(event) {
      const file = event.target.files[0];  // Obtener el archivo seleccionado
      if (file) {
          const reader = new FileReader();

          // Al cargar el archivo, actualizar la imagen en ambas secciones (article y aside)
          reader.onload = function(e) {
              imagenArticle.src = e.target.result; // Actualiza la imagen en el article
              imagenAside.src = e.target.result;   // Actualiza la imagen en el aside
          };

          reader.readAsDataURL(file); // Leer el archivo como una URL
      }
  });
 




// Modal de Nombre
var modalNombre = document.getElementById("miModal");
var btnNombre = document.getElementById("editar-nombre");
var spanNombre = document.getElementsByClassName("cerrar")[0];

// Cuando el usuario hace clic en el botón "Editar Nombre", se abre el modal
btnNombre.onclick = function() {
    modalNombre.style.display = "block";
}

// Cuando el usuario hace clic en <span> (x), se cierra el modal
spanNombre.onclick = function() {
    modalNombre.style.display = "none";
}

// Cuando el usuario hace clic fuera del modal, se cierra
window.onclick = function(event) {
    if (event.target == modalNombre) {
        modalNombre.style.display = "none";
    }
}

// Al hacer clic en el botón "Guardar" del nombre
document.getElementById("guardar-nombre").onclick = function() {
    var nuevoNombre = document.getElementById("ventana-nombre").value;
    var letrasYEspacios = /^[A-Za-z\s]+$/;

    if (letrasYEspacios.test(nuevoNombre)) {
        document.getElementById("nombreCompleto").innerText = nuevoNombre;
        modalNombre.style.display = "none";
        document.getElementById("ventana-nombre").value = '';
    } else {
        alert("Por favor, ingrese solo letras mayúsculas y espacios.");
    }
};





// Modal de Número de Celular
var modalCelular = document.getElementById("mi-celular");
var btnCelular = document.getElementById("editar-celular");
var spanCelular = document.getElementsByClassName("cerrar-celular")[0];

// Cuando el usuario hace clic en el botón "Editar Celular", se abre el modal
btnCelular.onclick = function() {
    modalCelular.style.display = "block";
}

// Cuando el usuario hace clic en <span> (x), se cierra el modal
spanCelular.onclick = function() {
    modalCelular.style.display = "none";
}

// Cuando el usuario hace clic fuera del modal, se cierra
window.onclick = function(event) {
    if (event.target == modalCelular) {
        modalCelular.style.display = "none";
    }
}

// Al hacer clic en el botón "Guardar" del celular
document.getElementById("guardar-celular").onclick = function() {
    var nuevoCelular = document.getElementById("ventana-celular").value;
    var soloNumeros = /^[0-9]{8}$/;

    if (soloNumeros.test(nuevoCelular)) {
        document.getElementById("numeroCelular").innerText = nuevoCelular;
        modalCelular.style.display = "none";
        document.getElementById("ventana-celular").value = '';
    } else {
        alert("Por favor, ingrese un número de celular válido de 8 dígitos.");
    }
};








// Modal de edición de correo electrónico
var modalCorreo = document.getElementById("mi-correo");
var btnCorreo = document.getElementById("editar-correo");
var spanCorreo = document.getElementsByClassName("cerrar-correo")[0];

// Cuando el usuario hace clic en el botón "Editar", se abre el modal
btnCorreo.onclick = function() {
    modalCorreo.style.display = "block";
}

// Cuando el usuario hace clic en <span> (x), se cierra el modal
spanCorreo.onclick = function() {
    modalCorreo.style.display = "none";
}

// Cuando el usuario hace clic fuera del modal, se cierra
window.onclick = function(event) {
    if (event.target == modalCorreo) {
        modalCorreo.style.display = "none";
    }
}

// Al hacer clic en el botón "Guardar"
document.getElementById("guardar-correo").onclick = function() {
    var nuevoCorreo = document.getElementById("ventana-correo").value;

    // Expresión regular para validar el formato de un correo electrónico
    var formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (formatoCorreo.test(nuevoCorreo)) {
        // Actualiza el span con el nuevo correo si es válido
        document.getElementById("correoElectronico").innerText = nuevoCorreo;

        // Cierra el modal
        modalCorreo.style.display = "none";

        // Limpia el input
        document.getElementById("ventana-correo").value = '';
    } else {
        // Si no es válido, muestra una alerta
        alert("Por favor, ingrese un correo electrónico válido.");
    }
};
