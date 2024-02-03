//al ingresar monto en el input de monto, se actualiza el monto_recibido
function actualizarMontoRecibido(){
    var monto = document.getElementById("monto_in").value;
    document.getElementById("monto_out").innerHTML = monto;
}
//keyup
document.getElementById("monto_in").addEventListener("keyup", actualizarMontoRecibido);