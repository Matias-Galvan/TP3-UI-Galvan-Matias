export const DetalleCompra = (
  poster,
  fecha,
  horario,
  sala,
  capacidad,
  titulo,
  genero,
  FuncionId
) => {
  return `<div class="modal-body">
    <form>
    <div class="container mt-5">
    <div class="row">
        <!-- Columna de la imagen -->
        <div class="col-md-4">
            <img src="${poster}" alt="Producto" class="img-fluid">
        </div>
        <div class="col-md-8">
            <form>
                <h2 class="fs-5">Detalle de función</h2>
                <hr>
                <p><strong>Fecha: </strong>${fecha}</p>
                <p><strong>Horario: </strong>${horario}</p>
                <hr>
                <h2 class="fs-5">Sala</h2>
                <hr>
                <p><strong>Sala: </strong>${sala}</p>
                <p><strong>Capacidad: </strong>${capacidad}</p>
                <hr>
                <h2 class="fs-5">Detalle de película</h2>
                <hr>
                <p><strong>Título: </strong>${titulo}</p>
                <p><strong>Género: </strong>${genero}</p>
                <hr>
                <h2 class="fs-5">Seleccione cantidad de entradas</h2>
                <label for="recipient-name" class="col-form-label">Cantidad de entradas</label>
                <input type="text" class="form-control" id="recipient-name">
                <label for="message-text" class="col-form-label">Nombre y apellido</label>
                <textarea class="form-control" id="message-text"
                    placeholder="Ingrese su nombre completo aquí..."></textarea>
            </form>
            <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancelar compra</button>
            <button id="${FuncionId}" type="button" class="btn btn-success modalComprarTicket">COMPRAR</button>
        </div>
        </div>
    </div>
</div>
    </form>
</div>`;
};

export default DetalleCompra;
