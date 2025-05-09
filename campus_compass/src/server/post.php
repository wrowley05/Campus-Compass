<?php
// CORS Headers
header('Access-Control-Allow-Origin: http://localhost:5173');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Handle OPTIONS (CORS preflight)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Connect to MySQL (XAMPP)
$mysqli = new mysqli("localhost", "root", "", "campuscompass");

// Check connection
if ($mysqli->connect_error) {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "DB Connection failed: " . $mysqli->connect_error]);
    exit;
}

// Validate table name from query string
$table = $_GET['q'] ?? '';
if (!preg_match('/^[a-zA-Z0-9_]+$/', $table)) {
    echo json_encode(["status" => "error", "message" => "Invalid table name"]);
    exit;
}

// Decode JSON input
$data = json_decode(file_get_contents('php://input'), true);
if (!$data || !is_array($data)) {
    echo json_encode(["status" => "error", "message" => "Invalid or missing JSON input"]);
    exit;
}

// Function to insert data securely
function pushData($mysqli, $table, $data) {
    $columns = implode(", ", array_keys($data));
    $placeholders = implode(", ", array_fill(0, count($data), "?"));
    $sql = "INSERT INTO `$table` ($columns) VALUES ($placeholders)";
    
    $stmt = $mysqli->prepare($sql);
    if (!$stmt) {
        echo json_encode(["status" => "error", "message" => "SQL Error: " . $mysqli->error]);
        return;
    }

    // Use "s" for all string params; adjust if you need specific types (i, d, b)
    $types = str_repeat("s", count($data));
    $stmt->bind_param($types, ...array_values($data));

    if ($stmt->execute()) {
        echo json_encode(["status" => "success", "message" => "Record inserted successfully"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Insert failed: " . $stmt->error]);
    }

    $stmt->close();
}

// Call the function
pushData($mysqli, $table, $data);

// Close DB connection
$mysqli->close();
