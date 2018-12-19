<?php
require_once("conectMYSQL.php");

if(isset($_FILES['url'])){ 
    $author = $_POST["author"];
    $curso = $_POST["curse"];
    $filename = $_FILES["url"]["name"];
    $source =  $_FILES["url"]["tmp_name"]; 
    $type = $_FILES["url"]["type"];
    $size = $_FILES["url"]["size"];
    $description = $_POST["description"];
}
//conectamos con la BBDD
$conn = connectMYSQL();

if(!$conn){ //Si la conexión falla
    echo "No conexion";
}else{
    if(!((strpos($type, "zip") || strpos($type, "rar")))){
        //Si pesa mas de 100KB no se subira
        if($size < 100000){
            echo json_encode("+100KB", JSON_FORCE_OBJECT);
        }else{
            //Subimos el nombre del fichero a la BBDD
            $sql = "INSERT INTO projects (username, project, description, author, curso) 
                        VALUES ('".$username."','".$filename."', '".$description."'".$author."','".$curso."')";
            if (mysqli_query($conn, $sql)){
            // Si hemos introducido el nombre correctamente a la BBDD guardaremos el proyecto en nuestra carpeta
                move_uploaded_file($source,"projects/".$filename);
                echo json_encode("OK", JSON_FORCE_OBJECT);
            }else{
                echo json_encode("NO", JSON_FORCE_OBJECT);
            }

        }
    }else{
        echo json_encode("ZIP/RAR", JSON_FORCE_OBJECT);
    }
}
// Cerramos conexión
mysqli_close($conn);

?>