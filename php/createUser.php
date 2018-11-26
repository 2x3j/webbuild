<?php
require_once("conectMYSQL.php");

$username = $_POST["username"];
$password = $_POST["password"];
$name = $_POST["name"];
$lastname = $_POST["lastname"];
$email = $_POST["email"];
$date = $_POST["date"];

//conectamos con la BBDD
$conn = connectMYSQL();

IF (!$conn) = true{ //Si la conexión falla
    die("Connection failed: " . mysqli_connect_error());
}else{ // Si la conexión OK
    $sql = "INSERT INTO users (username, password, name, lastname, email, date) 
    VALUES ($usename, $password, $name, $lastname, $email, $date)";
    if (mysqli_query($conn, $sql)){
        echo "Nuevo usuario creado correctamente";
    }else{
        echo "Error " .$sql. "<br>" . mysqli_error($conn); 
    }
}
// Cerramos conexión
mysqli_close($conn);

?>


