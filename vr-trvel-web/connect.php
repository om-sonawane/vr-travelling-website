<?php
// Establish database connection
$servername = "localhost";
$username = "your_username";
$password = "your_password";
$dbname = "your_database_name";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve form data
$name = $_POST['myname1'];
$email = $_POST['myemail'];
$phone = $_POST['myphone'];
$age = $_POST['myage'];
$gender = $_POST['mygender'];
$departure = $_POST['departuredate'];
$return = $_POST['returndate'];
$destination = implode(", ", $_POST['td']); // Assuming 'td' is an array
$package = $_POST['locations'];

// Prepare and bind SQL statement
$stmt = $conn->prepare("INSERT INTO your_table_name (name, email, phone, age, gender, departure_date, return_date, destination, package) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)");
$stmt->bind_param("sssisssss", $name, $email, $phone, $age, $gender, $departure, $return, $destination, $package);

// Execute the statement
if ($stmt->execute()) {
    echo "Registration successful!";
} else {
    echo "Error: " . $stmt->error;
}

// Close statement and connection
$stmt->close();
$conn->close();
?>
