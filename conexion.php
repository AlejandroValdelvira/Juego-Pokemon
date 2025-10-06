<?php

                      


$conexion = new mysqli($host, $usuario, $clave, $basedatos, $puerto);


if ($conexion->connect_error) {
    die("Error: " . $conexion->connect_error);
}

?>