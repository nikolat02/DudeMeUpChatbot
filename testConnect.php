<?php
$servername = "DESKTOP-AAMGGHC\SQLEXPRESS";
$username = "dmuLogin";
$password = "password";
$dbname = "master";
$connectionInfo = array('Database' => 'master', "UID" => 'dmuLogin', "PWD" => 'password');

// Create connection
//$conn =  sqlsrv_connect($servername, $username, $password, $dbname);
$conn =  sqlsrv_connect($servername, $connectionInfo);
// Check connection
if($conn)
{
	writeMsg($conn);
}

function writeMsg($conn) {
    if($conn)
	{
		$style = "Classic";
		$season = "Fall";
		$event = "Brunch";
		$query = "select * from dbo.dmu where Style = '" . $style . "' AND Season = '" . $season . "' 
		AND Events = '" . $event . "'";
		$stmt = sqlsrv_query($conn,$query);
		$row = sqlsrv_fetch_array($stmt);
		echo $row['Link'];
	}
}
//$sql = "SELECT Season,Style, Event FROM [master].[dbo].[dmu]";
//$result = $conn->query($sql);

//if ($result->num_rows > 0) {
     // output data of each row
//     while($row = $result->fetch_assoc()) {
//         echo "<br> id: ". $row["id"]. " - Name: ". $row["firstname"]. " " . $row["lastname"] . "<br>";
		 		 
//     }
//} else {
//     echo "0 results";
//}

//$conn->close();
?>  