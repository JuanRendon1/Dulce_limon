<?php
    include("conexion.php");

    if(isset($_POST["submit"])){

        $Usuario = $_POST["usuario"];
        $Contraseña = $_POST["contraseña"];
        $Comando = mysqli_query($conexion, "SELECT * FROM usuario WHERE Correo = '{$Usuario}' AND Contraseña = '{$Contraseña}'") or
        die("Problemas en el select:" . mysqli_error($conexion));

        if ($Datos = $Comando-> fetch_object()){

            header("Location: index.html");
        }
        else{
            echo "Contraseña o usuario incorrectos";
        }   
    }
?>