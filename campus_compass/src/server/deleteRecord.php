<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['status' => 'error', 'message' => 'Method Not Allowed']);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true) ?? $_POST;
$table = $input['table'] ?? '';
$id = $input['id'] ?? '';

if (!preg_match('/^[a-zA-Z0-9_]+$/', $table)) {
    echo json_encode(['status' => 'error', 'message' => 'Invalid table name']);
    exit;
}

if (!filter_var($id, FILTER_VALIDATE_INT)) {
    echo json_encode(['status' => 'error', 'message' => 'Invalid ID']);
    exit;
}

$mysqli = new mysqli("localhost", "root", "", "campuscompass");

if ($mysqli->connect_error) {
    echo json_encode(['status' => 'error', 'message' => 'Connection failed: ' . $mysqli->connect_error]);
    exit;
}

$stmt = $mysqli->prepare("DELETE FROM `$table` WHERE id = ?");
if (!$stmt) {
    echo json_encode(['status' => 'error', 'message' => 'SQL error: ' . $mysqli->error]);
    exit;
}

$stmt->bind_param("i", $id);
$stmt->execute();

if ($stmt->affected_rows > 0) {
    echo json_encode(['status' => 'success', 'message' => "Record deleted from $table."]);
} else {
    echo json_encode(['status' => 'error', 'message' => 'No record found or already deleted.']);
}

$stmt->close();
$mysqli->close();
