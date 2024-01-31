<?php
	$firstName = $_POST['firstName'];
	$lastName = $_POST['lastName'];
	$gender = $_POST['gender'];
	$email = $_POST['email'];
	$password = $_POST['password'];
	$number = $_POST['number'];

	$conn = new mysqli('localhost', 'root', '', 'test');
	if ($conn->connect_error) {
		echo "$conn->connect_error";
		die("Connection Failed : " . $conn->connect_error);
	} else {
		$stmt = $conn->prepare("INSERT INTO registration(firstName, lastName, gender, email, password, number) VALUES(?, ?, ?, ?, ?, ?)");
		$stmt->bind_param("sssssi", $firstName, $lastName, $gender, $email, $password, $number);
		$stmt->execute();
		$stmt->close();
		$conn->close();

		// Redirect to another page
		echo "<script>window.location.href = 'services3.html';</script>";
		exit(); 
	}
?>
