// Obtiene las funciones de la base de datos y las muestra en el select
export const ArregloFunciones = {};
ArregloFunciones.funciones = async (fecha, titulo, GeneroId) => {
  const config = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await fetch(
      `http://localhost:5176/api/v1/Funcion?fecha=${fecha}&titulo=${titulo}&genero=${GeneroId}`,
      config
    );
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const ArregloFuncionesDisponibles = {};
ArregloFuncionesDisponibles.funcionesDisponibles = async (funcionId) => {
  const config = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await fetch(
      `http://localhost:5176/api/v1/Funcion/${funcionId}/tickets`,
      config
    );
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const ArregloFuncion = {};
ArregloFuncion.FuncionDisponible = async (funcionId) => {
  const config = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await fetch(
      `http://localhost:5176/api/v1/Funcion/${funcionId}`,
      config
    );
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};
export const ComprarTicketResponse = async (funcionId, request) => {
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  };
  try {
    const response = await fetch(
      `http://localhost:5176/api/v1/Funcion/${funcionId}/tickets`,
      config
    );
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export default {
  ArregloFunciones,
  ArregloFuncionesDisponibles,
  ArregloFuncion,
  ComprarTicketResponse,
};
