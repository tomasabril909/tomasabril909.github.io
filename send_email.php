<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener los datos del formulario
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Configurar los detalles del correo
    $to = "tomasabril350@gmail.com"; // La dirección de correo donde se enviará el mensaje
    $subject = "Nuevo mensaje de contacto de $name";
    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "Content-type: text/html; charset=UTF-8";

    // Cuerpo del mensaje
    $body = "<h2>Nuevo mensaje de contacto</h2>
             <p><strong>Nombre:</strong> $name</p>
             <p><strong>Correo Electrónico:</strong> $email</p>
             <p><strong>Mensaje:</strong></p>
             <p>$message</p>";

    // Enviar el correo
    if (mail($to, $subject, $body, $headers)) {
        echo "Mensaje enviado correctamente.";
    } else {
        echo "Error al enviar el mensaje. Inténtalo más tarde.";
    }
}
?>
