export const listadoTickets = (
  TicketId,
  Fecha,
  Horario,
  Poster,
  Titulo,
  Genero,
  Sala,
  Capacidad,
  Cliente
) => {
  return `
<table class="table table-striped table-hover">
<thead>
    <tr>
        <th scope="col" class="text-center">Nº Ticket</th>
        <th scope="col" class="text-center">Fecha</th>
        <th scope="col" class="text-center">Horario</th>
        <th scope="col" class="img-center">Poster</th>
        <th scope="col" class="text-center">Título</th>
        <th scope="col" class="text-center">Género</th>
        <th scope="col" class="text-center">Sala</th>
        <th scope="col" class="text-center">Capacidad</th>
        <th scope="col" class="text-center">Cliente</th>
    <tr>
</thead>                    
<tbody id = "tabla-tickets"></tbody>
<tr>
<td class = "text-center">${TicketId}</td>
<td class = "text-center">${new Date(Fecha).toLocaleDateString()}</td>
<td class = "text-center">${Horario}</td>
<td class = "text-center"><img src="${Poster}" style="width: 20px; height: 20px;"></img></td>
<td class = "text-center">${Titulo}</td>
<td class = "text-center">${Genero}</td>
<td class = "text-center">${Sala}</td>
<td class = "text-center">${Capacidad}</td>
<td class = "text-center">${Cliente}</td>

<tr>    
</table>
`;
};

export default listadoTickets;
