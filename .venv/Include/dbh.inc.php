<?php

$dsn ="mysql:host=localhost;dbname=myconnection1";
$dbusername ="root";
$password = "";
// Create a connection
   try{
    $pdo= new PDO($dsn,$dbusername,$dbpassword);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}   catch(PDOException $e) {
    echo "Error!: " . $e->getMessage();
}