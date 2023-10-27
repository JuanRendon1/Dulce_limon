<?php
$Conexion = mysqli_connect("localhost", "root", "", "dulcelimon") or
die("Problemas con la conexión");


$nombreUsuario = $_POST['Nombre_usuario'];
$correoUsuario = $_POST['Correo_electronico'];
$contraseñaUsuario = $_POST['Contrasena'];
$confirmarContraseña = $_POST['Confirmar_contrasena'];

if($contraseñaUsuario === $confirmarContraseña){

    $Consulta = mysqli_query($Conexion, "SELECT * FROM usuario WHERE '$correoUsuario' = Correo") or die("Problemas en el select:" . mysqli_error($conexion));
    if ($Consulta->num_rows > 0) {
        echo "El nombre de usuario o correo electrónico ya están en uso.";
    } else {
        if ($contraseñaUsuario != $confirmarContraseña) {
            
            exit;
        }
        mysqli_query($Conexion, "INSERT INTO usuario (Nombres, Correo, Contraseña, Ciudad_idCiudad) VALUES ('$nombreUsuario', '$correoUsuario', '$contraseñaUsuario' , '1')");
        header("Location: index.html");
        exit;
    }
} else {
    echo "Contraseñas no coinciden.";
}
?>
