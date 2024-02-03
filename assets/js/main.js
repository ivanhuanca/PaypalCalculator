$(document).ready(function () {
    $('#si_envia').on('input', function () {
        const monto_in = $(this).val();
        const comision_porcentage = parseFloat($('#comision_porcentage').val());
        const cargo_fijo = parseFloat($('#cargo_fijo').val());
        var monto = parseFloat(monto_in);
        var comision = (monto * comision_porcentage / 100) + cargo_fijo;

        var total = monto - comision;
        //redondear a 2 decimales
        total = total.toFixed(2);
        comision = comision.toFixed(2);
        $('#recibira').val(total);
        $('#comision_recibo').val(comision);
    });

    $('#para_recibir').on('input', function () {
        const monto_in = $(this).val();
        const comision_porcentage = parseFloat($('#comision_porcentage').val());
        const cargo_fijo = parseFloat($('#cargo_fijo').val());
        var monto = parseFloat(monto_in);
        var comision = (monto * comision_porcentage / 100) + cargo_fijo;

        var total = monto + comision;
        //redondear a 2 decimales
        total = total.toFixed(2);
        comision = comision.toFixed(2);
        $('#hay_que_enviar').val(total);
        $('#comision_envio').val(comision);
    });
});