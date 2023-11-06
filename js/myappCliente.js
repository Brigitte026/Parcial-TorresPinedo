$(document).ready(function () {
    $.ajax({
        url: 'json/Cliente.json',
        dataType: 'json',
        success: function (clienteData) {

            $('#cliente').html(`
                <p>Nombre: ${clienteData.nombre}</p>
                <p>Apellido: ${clienteData.apellido}</p>
                <p>Email: ${clienteData.email}</p>
                <p>Teléfono: ${clienteData.telefono}</p>
                <p>Dirección: ${clienteData.direccion}</p>
                <p>Saldo: s/.${clienteData.saldo}</p>
            `);

            const transactionesList = $('#transactiones');
            transactionesList.empty();

            $.each(clienteData.ultimas_transacciones, function (index, transaccion) {
                const transaccionItem = `
                    <li class="transaccion-item" data-transaction-id="${transaccion.id}">
                        <p>ID: ${transaccion.id}</p>
                        <p>Monto: s/.${transaccion.monto}</p>
                        <p>Fecha: ${transaccion.fecha}</p>
                        <p>Código: ${transaccion.codigo}</p>
                    </li>
                `;
                transactionesList.append(transaccionItem);
            });


            $('.transaccion-item').click(function () {
                const transactionId = $(this).data('transaction-id');
                localStorage.setItem('transactionId', transactionId);
                window.location.href = 'transaccion.html'; 
            });
        },
        error: function () {
            alert('Hubo un error al cargar los datos del cliente.');
        }
    });
});


