<?php
$host = "localhost";
$username = "adm_webgenerator";
$password = "webgenerator2024";
$nombreDB = "webgenerator";

$conn = new mysqli($host, $username, $password, $nombreDB);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}
?>
