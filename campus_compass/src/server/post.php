<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");

// Database connection
$mysqli = new mysqli("mi-linux.wlv.ac.uk", "2384101", "11tp7w", "db2384101");;

// Check connection
if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
}

// Get the table and id name from the query parameter
$table = $_GET['q'];
$data = json_decode(file_get_contents('php://input'), true);
// Function to push data to a Database
function pushData($mysqli, $table, $data) {
    // Prepare the SQL statement
    $columns = implode(", ", array_keys($data));
    $placeholders = implode(", ", array_fill(0, count($data), "?"));
    $sql = "INSERT INTO $table ($columns) VALUES ($placeholders)";
    
    // Prepare the statement
    $stmt = $mysqli->prepare($sql);
    
    // Bind parameters
    $types = str_repeat("s", count($data)); // Assuming all data is string type
    $stmt->bind_param($types, ...array_values($data));
    
    // Execute the statement
    if ($stmt->execute()) {
        echo json_encode(["status" => "success", "message" => "Record inserted successfully"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Error inserting record: " . $stmt->error]);
    }
    
    // Close the statement
    $stmt->close();
}

// Close connection
$mysqli->close();
?>
