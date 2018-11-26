<?php

$user = $_GET["user"];
$pass = $_GET["pass"];

if($user == "admin" && $pass == "admin"){
    echo " ok ";
}else{
    echo "no ok";    
}

?>
