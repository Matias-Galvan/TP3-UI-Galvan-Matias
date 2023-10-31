// Obtiene las funciones de la base de datos y las muestra en el select
export const ArregloFunciones = {};
ArregloFunciones.funciones = async (fecha, titulo, genero) => {
  const config = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await fetch(
      `http://localhost:5176/api/v1/Funcion?fecha=${fecha}&titulo=${titulo}&genero=${genero}`,
      config
    );
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export default { ArregloFunciones };
