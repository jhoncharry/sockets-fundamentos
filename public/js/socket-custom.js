var socket = io();

socket.on("connect", function () {
    console.log("Conectado al servidor");
});


// Escuchar
socket.on("disconnect", function () {
    console.log("Perdimos conexion con el servidor");
});


// Enviar informacion
socket.emit("enviarMensaje", {

    usuario: "Jhon",
    mensaje: "Hola mundo"

}, function (resp) {

    console.log("respuesta ser: ", resp);

});


// Escuchar informacion
socket.on("enviarMensaje", (mensaje) => {
    console.log("Servidor: ", mensaje);
});