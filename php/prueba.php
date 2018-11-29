<?php
ini_set('display_errors', 1);
require_once('archivo.php');
$identificador = $_GET['nombre']; 
json_encode($identificador);
?>