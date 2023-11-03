export const TablaFunciones = (FuncionId, Fecha, Horario, Sala, Capacidad) => {
  return `
    <tr>
        <td class = "text-center">${FuncionId}</td>
        <td class = "text-center">${new Date(Fecha).toLocaleDateString()}</td>
        <td class = "text-center">${Horario}</td>
        <td class = "text-center">${Sala}</td>
        <td class = "text-center">${Capacidad}</td>
        <td class = "text-center">    <button type="button" id="${FuncionId}" class="btn btn-primary modalComprar" data-bs-toggle="modal" data-bs-target="#exampleModal"
        data-bs-whatever="@getbootstrap">COMPRAR ENTRADAS</button>

</td>
    <tr>
    `;
};
export default TablaFunciones;
