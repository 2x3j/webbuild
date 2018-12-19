<?php

require_once('conectMYSQL.php'); 

$project = $_POST['project'];  
//$date = $_POST["date"];

//conectamos con la BBDD
  $conn = conectMYSQL(); 

if(!$conn){ //Si la conexión falla
    print_r('Connection failed: ' . mysqli_connect_error());
}else{ // Si la conexión OK
    $sql = "DELETE FROM projects WHERE project = '".$project."'";
    if(mysqli_query($conn, $sql)){
        echo json_encode("OK", JSON_FORCE_OBJECT);
    }else{
        echo json_encode("NO", JSON_FORCE_OBJECT);
    }
}
// Cerramos conexión
mysqli_close($conn);

?>