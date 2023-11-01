export const cardFuncion = (funcionId, peliculaId, titulo, poster, genero) => {
  return `<div class="col">
        <div class="card shadow-sm latest-inside" id="${funcionId}">
            <img src="${poster}" class="card-img-top">
          <div class="card-body heading1">
              <h6>${titulo}</h6>
              <h8>${genero}</h8>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <div class="btn2">
                  <div class="btn1">
                  <a href=".././Pelicula/pelicula.html" id="${peliculaId}" data-id="navPelicula" class="navigateDetalle">
                  Ver detalle</a>
              </div>
            </div>
              </div>
            </div>
          </div>
        </div>
      </div>`;
};
export default cardFuncion;
