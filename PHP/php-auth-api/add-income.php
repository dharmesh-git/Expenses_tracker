<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require './db_connection.php';

// POST DATA
$data = json_decode(file_get_contents("php://input"));

if (
    isset($data->user_desc)
    && isset($data->user_Amount)
    && isset($data->user_date)
    && isset($data->user_catg)
    && !empty(trim($data->user_desc))
    && !empty(trim($data->user_Amount))
    && !empty(trim($data->user_date))
    && !empty(trim($data->user_catg))
) {
    $username = mysqli_real_escape_string($db_conn, trim($data->user_desc));
    $useremail = mysqli_real_escape_string($db_conn, trim($data->user_Amount));
    $userdate = mysqli_real_escape_string($db_conn, trim($data->user_date));
    $usercatg = mysqli_real_escape_string($db_conn, trim($data->user_catg));
   

    
        $insertUser = mysqli_query($db_conn, "INSERT INTO `income`(`user_desc`,`user_Amount`,`user_date`,`Category`) VALUES('$username','$useremail','$userdate','$usercatg')");
        echo json_encode(["success" => 0, "msg" => "data insert successfully"]);

    
} else {
    echo json_encode(["success" => 0, "msg" => "Please fill all the required fields!"]);
}
