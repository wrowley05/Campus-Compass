<?php
// delete.php (top of file)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header("Access-Control-Allow-Origin: *"); // or 'http://localhost' for security
    header("Access-Control-Allow-Methods: GET, POST, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");
    http_response_code(200);
    exit();
}

// Allow for actual DELETE request too
header("Access-Control-Allow-Origin: *"); // or 'http://localhost'

// Database connection
$mysqli = new mysqli("mi-linux.wlv.ac.uk", "2384101", "11tp7w", "db2384101");;

// Check connection
if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
}

// Get the table and id name from the query parameter
$table = $_GET['q'];

$id = $_GET['id'];

// Function to delete data from a table
function deleteData($mysqli, $table, $id) {
    $sql = "DELETE FROM $table WHERE classroom_id = ?";
    $stmt = $mysqli->prepare($sql);
    $stmt->bind_param("i", $id);
    
    if ($stmt->execute()) {
        echo json_encode(["status" => "success", "message" => "Record deleted successfully"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Error deleting record: " . $stmt->error]);
    }
    
    $stmt->close();
}


// Close connection
$mysqli->close();
?>
