<?php
header("Access-Control-Allow-Origin: *");

// Database connection
$mysqli = new mysqli("localhost", "root", "", "campuscompass");

// Check connection
if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
}

// Function to fetch data from a table
function fetchData($mysqli, $table) {
    $sql = "SELECT * FROM $table";
    $result = $mysqli->query($sql);
    $dbdata = [];
    while ($row = $result->fetch_assoc()) {
    $dbdata[] = $row;
   }
echo json_encode($dbdata);
}

// Fetch and display data from all table designated by query
fetchData($mysqli, $_GET['q']);


// Close connection
$mysqli->close();
?>
