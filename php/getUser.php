<?php
    if($_POST['user'] == 'admin' && $_POST['pass'] =='admin'){
        echo 'OK';
    } else {
        echo 'FAIL';
    }
?>