<?php

$servername = "localhost";
$database = "repositorio";
$username = "root";
$password = "";
// Creamos la conexión
$conn = mysqli_connect($servername, $username, $password, $database);
// Chequeamos la conexión
if (!$conn){
    print_r("Connection failed: " . mysqli_connect_error());
}else{
    $username = $_POST["inputProjectUsername"];
    $description = $_POST["inputProjectDescription"];
    $author = $_POST["inputProjectAuthor"];
    $curso = $_POST["inputProjectCurse"];
    $project = $_POST["inputProjectProject"];
    $filename = $_FILES["inputUploadFile"]["name"];
    $source =  $_FILES["inputUploadFile"]["tmp_name"]; 
    $type = $_FILES["inputUploadFile"]["type"];
    $size = $_FILES["inputUploadFile"]["size"];
    
    $sql = 'INSERT INTO projects (username, project, description, author, curso, file) 
    VALUES ("'.$username.'","'.$project.'","'.$description.'","'.$author.'","'.$curso.'","'.$filename.'")';
    if(mysqli_query($conn, $sql)){
    // Si hemos introducido el nombre correctamente a la BBDD guardaremos el proyecto en nuestra carpeta
    /*  move_uploaded_file($source,"projects/".$filename); */
        move_uploaded_file($source,"../projects/".$filename);
        echo "El proyecto se ha subido correctamente";
    }else{
        echo "El proyecto ya existe en la BBDD";  
    }
}





?>