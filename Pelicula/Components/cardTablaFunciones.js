export const TablaFunciones = (FuncionId, Fecha, Horario, Sala, Capacidad) => {
  return `
    <tr>
        <td class = "text-center">${FuncionId}</td>
        <td class = "text-center">${new Date(Fecha).toLocaleDateString()}</td>
        <td class = "text-center">${Horario}</td>
        <td class = "text-center">${Sala}</td>
        <td class = "text-center">${Capacidad}</td>
        <td class = "text-center"><button id="start-wizard" class="modalComprar">COMPRAR ENTRADAS</button></td>
    <tr>
    `;
};
export default TablaFunciones;
