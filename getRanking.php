<?php

    include_once "conexion.php";

if ($conexion->connect_error) {
    die("Conexión fallida: " . $conexion->connect_error);
}

$sql = "SELECT nombre, puntuacion FROM ranking ORDER BY puntuacion DESC LIMIT 5";
$result = $conexion->query($sql);

$ranking = array();
while($row = $result->fetch_assoc()){
    $ranking[] = $row;
}

header('Content-Type: application/json');
echo json_encode($ranking);

$conexion->close();
?>