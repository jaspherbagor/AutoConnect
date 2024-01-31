<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Payment Form</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        form {
            max-width: 400px;
            margin: 50px auto;
        }
        input, select {
            width: 100%;
            padding: 10px;
            margin: 8px 0;
            display: inline-block;
            border: 1px solid #ccc;
            box-sizing: border-box;
        }
        button {
            background-color: #4caf50;
            color: white;
            padding: 10px 15px;
            margin: 8px 0;
            border: none;
            cursor: pointer;
            width: 100%;
        }
        button:hover {
            opacity: 0.8;
        }
    </style>
</head>
<body>

<?php
// Handle form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Validate and process payment information
    $name = $_POST["name"];
    $address = $_POST["address"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $cardNumber = $_POST["cardNumber"];
    $expirationDate = $_POST["expirationDate"];
    $cvv = $_POST["cvv"];
    $amount = $_POST["amount"];

    // Process payment 

    $conn = new mysqli('localhost','root','','test');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$stmt = $conn->prepare("insert into payments(name, address, email, phone, cardNumber,expirationDate,cvv, amount) values(?, ?, ?, ?, ?, ?,?,?)");
		$stmt->bind_param("sssiiiii", $name, $address, $email, $phone, $cardNumber, $expirationDate, $cvv, $amount);
	    $stmt->execute();
		echo "Payment successful...";
		$stmt->close();
		$conn->close();
	}

    // $paymentSuccessful = true;

    // if ($paymentSuccessful) {
    //     echo "<p style='color: green;'>Payment successful. Thank you for paying $$amount!</p>";
    // } else {
    //     echo "<p style='color: red;'>Payment failed. Please try again.</p>";
    // }
}
?>

<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>

    <label for="address">Address:</label>
    <input type="text" id="address" name="address" required>

    <label for="email">Email Address:</label>
    <input type="email" id="email" name="email" required>

    <label for="phone">Phone Number:</label>
    <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" required>

    <label for="cardNumber">Card Number:</label>
    <input type="text" id="cardNumber" name="cardNumber" pattern="[0-9]{16}" required>

    <label for="expirationDate">Expiration Date:</label>
    <input type="text" id="expirationDate" name="expirationDate" placeholder="MM/YYYY" pattern="^(0[1-9]|1[0-2])\/[0-9]{4}$" required>

    <label for="cvv">CVV:</label>
    <input type="text" id="cvv" name="cvv" pattern="[0-9]{3,4}" required>

    <label for="amount">Amount:</label>
    <input type="text" id="amount" name="amount" pattern="\d+(\.\d{2})?" required>

    <button type="submit">Submit Payment</button>
</form>

</body>
</html>
