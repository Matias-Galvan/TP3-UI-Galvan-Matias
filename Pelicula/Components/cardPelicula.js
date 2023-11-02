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
            <div class="col-lg-8">
                <div class="movie-info-box">
                    <h2 class="name"><strong>${titulo}</strong></h2>
                    <ul class="features">
                        <li>
                            <div class="tags">${genero}</div>
                        </li>
                    </ul>
                    <p class="description">${sinopsis}</p>
                    <a href="#" id="ctl00_Contenido_link1"
                        class="add-btn">ENTRADAS</a>
                    <div class="block mt-5 video-player video-container">
                        <iframe width="400" height="230" src="${urlVideo}" title="Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
