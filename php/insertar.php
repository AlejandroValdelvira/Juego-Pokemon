<?php
include_once "conexion.php";

$nombre = $_POST['nombre'];
$puntuacion = intval($_POST['puntuacion']);

$sql = "INSERT INTO ranking (nombre, puntuacion) VALUES (?, ?)";
$stmt = $conexion->prepare($sql);
$stmt->bind_param("si", $nombre, $puntuacion);
$stmt->execute();

echo json_encode(["status" => "ok"]);
?>