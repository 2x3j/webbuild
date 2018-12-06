<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE'); 
require_once('conectMYSQL.php'); 

$result = array();
$info = array();
$i = 0;
/* $sql = "SELECT * FROM projects";
$info = getArraySQL($sql);
echo json_encode($info, JSON_FORCE_OBJECT); */
//conectamos con la BBDD
$conn = conectMYSQL();

if(!$conn){ //Si la conexión falla
    die("Connection failed: " . mysqli_connect_error());
}else{ // Si la conexión OK
    $sql = "SELECT * FROM projects";
    $result = mysqli_query($conn, $sql);
    while($row = $result->fetch_assoc()){
        $info[$i] = $row;
        $i++;
    }
    echo json_encode($info, JSON_FORCE_OBJECT);
}

?>
