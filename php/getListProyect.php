<?php
//conectamos con la BBDD
$conn = conectMYSQL();

if(!$conn){ //Si la conexión falla
    die("Connection failed: " . mysqli_connect_error());
}else{ // Si la conexión OK
    $sql = "SELECT * FROM projects";
    $result = mysqli_query($conn, $sql);
    $info = $result->fetch_assoc();
    if(($info["project"] != null)){
        echo json_encode("OK", JSON_FORCE_OBJECT);
    }else{
        echo json_encode("NO", JSON_FORCE_OBJECT);
    }
}

?>
