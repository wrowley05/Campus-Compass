<?php
header("Access-Control-Allow-Origin: *");

// Database connection
$mysqli = new mysqli("mi-linux.wlv.ac.uk", "2384101", "11tp7w", "db2384101");;

// Check connection
if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
}

// Function to push data to a Database



// Close connection
$mysqli->close();
?>
