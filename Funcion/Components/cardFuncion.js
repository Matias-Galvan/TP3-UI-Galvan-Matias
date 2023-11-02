export const cardFuncion = (funcionId, peliculaId, titulo, poster, genero) => {
  return `<div class="col">
  <div class="category-thumb">
  <figure class="category-image" id="${funcionId}">
      <img alt="Image" src="${poster}">
  </figure>
  <div class="category-content">
      <ul class="tags">
          <li>Estreno</li>
      </ul>
      <h3 class="name">${titulo}</h3>
      <div class="play-btn">
      <a href=".././Pelicula/pelicula.html" id="${peliculaId}" data-id="navPelicula" class="navigateDetalle">
      Ver detalle</a>
      </div><small class="details">${genero}</small>
  </div>
  </div>
      </div>`;
};
export default cardFuncion;
