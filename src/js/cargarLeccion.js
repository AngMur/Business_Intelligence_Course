function cargarLeccion(nombreArchivo) {
      fetch('../modulos/' + nombreArchivo)
        .then(res => res.text())
        .then(html => {
          document.getElementById('main-content').innerHTML = html;
        })
        .catch(error => {
          document.getElementById('main-content').innerHTML = '<p>Error al cargar la lección.</p>';
          console.error(error);
        });
}