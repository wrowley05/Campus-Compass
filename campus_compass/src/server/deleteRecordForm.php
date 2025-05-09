<!DOCTYPE html>
<html>
<head>
    <title>Delete Record Test Form</title>
</head>
<body>
    <h2>Test Delete Record (POST to API)</h2>
    <form method="POST" action="deleteRecord.php">
        <label for="table">Table Name:</label>
        <input type="text" id="table" name="table" required><br><br>

        <label for="id">Record ID:</label>
        <input type="number" id="id" name="id" required><br><br>

        <button type="submit">Delete Record</button>
    </form>
</body>
</html>
