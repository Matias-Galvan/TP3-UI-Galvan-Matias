export const cardPelicula = (
  peliculaId,
  titulo,
  poster,
  genero,
  trailer,
  sinopsis,
  funciones
) => {
  let urlVideo = "";
  if (trailer.match(/https:\/\/youtu.be\/(.+)/)) {
    urlVideo = trailer
      .match(/https:\/\/youtu.be\/(.+)/)[0]
      .replace("https://youtu.be/", "https://www.youtube.com/embed/");
  } else if (trailer.match(/https:\/\/www.youtube.com\/watch\?v=(.+)/)) {
    urlVideo = trailer
      .match(/https:\/\/www.youtube.com\/watch\?v=(.+)/)[0]
      .replace(
        "https://www.youtube.com/watch?v=",
        "https://www.youtube.com/embed/"
      );
  }

  return `<section class="content-section">
    <div class="container">
        <div class="row">
        <div class="modal" id="wizard-modal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="container mt-3">
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style="width: 0%;" aria-valuenow="0"
                            aria-valuemin="0" aria-valuemax="100" id="progress-bar"></div>
                    </div>
                </div>
                <div class="modal-header">
                    <h5 class="modal-title" id="modal-title">Asistente - Paso 1</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <p>Contenido del Paso 1</p>
                </div>
                <div class="modal-footer">
                    <button id="prev-step" class="btn btn-secondary">Anterior</button>
                    <button id="next-step" class="btn btn-primary">Siguiente</button>
                </div>
            </div>
        </div>
    </div>

            <div class="col-lg-8">
                <div class="movie-info-box">
                    <h2 class="name"><strong>${titulo}</strong></h2>
                    <ul class="features">
                        <li>
                            <div class="tags">${genero}</div>
                        </li>
                    </ul>
                    <p class="description">${sinopsis}</p>
                        <button id="botonFunciones" class="btn btn-primary add-btn" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false">VER FUNCIONES</button>
                  <div class="collapse" id="collapseExample">
                    <div class="card card-body" style="
                    margin-top: 12px;
                ">
                    <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col" class="text-center">Código</th>
                            <th scope="col" class="text-center">Fecha</th>
                            <th scope="col" class="text-center">Horario</th>
                            <th scope="col" class="text-center">Sala</th>
                            <th scope="col" class="text-center">Capacidad</th>
                            <th scope="col" class="text-center">Acciones</th>
                        <tr>
                    </thead>                    
                <tbody id = "tabla-alquileres"></tbody>    
                </table>
                    </div>
                  </div>
                    <div class="block mt-5 video-player video-container">
                        <iframe width="600" height="400" src="${urlVideo}" title="Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>

                </div>
            </div>
            <div class="col-lg-4">
                <div class="movie-side-info-box">
                    <figure>
                        <img src="${poster}" alt="Image">
                    </figure>
                    <ul>
                        <li><strong>Título Original: </strong>${titulo}</li>
                        <li><strong>Género:</strong> ${genero}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>`;
};
export default cardPelicula;
