<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");

// Path to the file containing the hashed password
$hashFile = 'password.hash';

function isValidPassword($password) {
    return preg_match('/^[\x20-\x7E]{8,64}$/', $password);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $inputPassword = $_POST['password'] ?? '';
    $inputPassword = trim($inputPassword);

    if (!isValidPassword($inputPassword)) {
        echo json_encode(['success' => false, 'message' => 'Invalid password format.']);
        exit;
    }

    if (!file_exists($hashFile)) {
        echo json_encode(['success' => false, 'message' => 'Password hash file not found.']);
        exit;
    }

    $storedHash = trim(file_get_contents($hashFile));

    if (password_verify($inputPassword, $storedHash)) {
        echo json_encode(['success' => true, 'message' => 'Access granted.']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Access denied.']);
    }
    exit;
}

// If not POST, reject request
echo json_encode(['success' => false, 'message' => 'Invalid request method.']);
exit;