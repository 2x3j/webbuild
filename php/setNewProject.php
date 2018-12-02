<?php
require_once("conectMYSQL.php");

$username = $_GET["username"];
$description = $_GET["description"];

$filename = $_FILES["userfile"]["name"];
$source =  $_FILES["userfile"]["tmp_name"]; 
$type = $_FILES["userfile"]["type"];
$size = $_FILES["userfile"]["size"];

//conectamos con la BBDD
$conn = connectMYSQL();

if(!$conn){ //Si la conexión falla
    echo "No conexion";
}else{
    if(!((strpos($type, "zip") or  strpos($type, "rar")))){
        //Si pesa mas de 100KB no se subira
        if($size < 100000){
            echo json_encode("El fichero no debe pesar más de 100KB", JSON_FORCE_OBJECT);
        }else{
            //Subimos el nombre del fichero a la BBDD
            $sql = "INSERT INTO projects (username, project, description) 
                        VALUES ('".$usename."','".$filename."', '".$description.")";
            if (mysqli_query($conn, $sql)){
            // Si hemos introducido el nombre correctamente a la BBDD guardaremos el proyecto en nuestra carpeta
                move_uploaded_file($source,"proyectos/".$filename);
                echo "Subiendo...";
            }else{
                echo "Error " .$sql. "<br>" . mysqli_error($conn); 
            }

        }
    }else{
        echo "El proyecto subido debe estar comprimido (.zip o .rar)";
    }
}
// Cerramos conexión
mysqli_close($conn);

?>