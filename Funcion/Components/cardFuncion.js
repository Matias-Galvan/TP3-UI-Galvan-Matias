export const cardFuncion = (peliculaId, titulo, poster) => {
  return `<div class="col">
        <div class="card shadow-sm" id="${peliculaId}">
            <img src="${poster}">
          <div class="card-body">
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.</p>
              <h2>${titulo}</h2>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary" id="btn">Ver</button>
                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
              </div>
            </div>
          </div>
        </div>
      </div>`;
};
export default cardFuncion;
