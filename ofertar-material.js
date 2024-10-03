<script>
    document.getElementById('ofertaForm').onsubmit = function(event) {
        const archivoInput = document.getElementById('archivo');
        const file = archivoInput.files[0];
        
        if (file && file.size > 2 * 1024 * 1024) { // 2 MB en bytes
            alert('El archivo no debe exceder los 2 MB.');
            event.preventDefault(); // Evita el envío del formulario
        }
    };
</script>
