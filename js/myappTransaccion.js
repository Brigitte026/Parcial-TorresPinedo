$(document).ready(function () {
    const transactionId = localStorage.getItem('transactionId');

    if (transactionId) {
        const transactionIndex = parseInt(transactionId) - 1;

        if (!isNaN(transactionIndex)) {
            $.ajax({
                url: 'json/transaccion.json',
                dataType: 'json',
                success: function (transactionDetails) {
                    if (transactionIndex >= 0 && transactionIndex < transactionDetails.length) {
                        const selectedTransaction = transactionDetails[transactionIndex];
                        $('#DetalleTransacción').html(`
                            <p>ID: ${selectedTransaction.id}</p>
                            <p>Monto: s/.${selectedTransaction.monto}</p>
                            <p>Fecha: ${selectedTransaction.fecha}</p>
                            <p>Código: ${selectedTransaction.codigo}</p>
                        `);
                    } else {
                        $('#DetalleTransacción').html('<p>Error: No se encontró la transacción específica.');
                    }
                },
                error: function () {
                    $('#DetalleTransacción').html('<p>Error: No se pudieron cargar los detalles de la transacción.');
                }
            });
        } else {
            $('#DetalleTransacción').html('<p>Error: ID de transacción no válido.');
        }
    } else {
        $('#DetalleTransacción').html('<p>Error: No se especificó una transacción válida.');
    }
});
