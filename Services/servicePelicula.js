export const PeliculaDetalle = {
  peliculaDetalle: async (peliculaId) => {
    const config = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await fetch(
        `http://localhost:5176/api/v1/Pelicula/${peliculaId}`,
        config
      );
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      console.log(error);
    }
  },
};
export default { PeliculaDetalle };
