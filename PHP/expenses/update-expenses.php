<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require './db_connection.php';

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
    $userdesc = mysqli_real_escape_string($db_conn, trim($data->user_desc));
    $userAmount = mysqli_real_escape_string($db_conn, trim($data->user_Amount));
    $userdate = mysqli_real_escape_string($db_conn, trim($data->user_date));
    $usercatg = mysqli_real_escape_string($db_conn, trim($data->user_catg));
    echo "<script>console.log('Debug Objects: " . $userAmount,$userdesc,$usercatg,$userdate . "' );</script>";
        $updateUser = mysqli_query($db_conn, "UPDATE `expenses` SET `user_desc`='$userdesc', `user_Amount`='$userAmount',`user_date`=$userdate,`Category`=$usercatg WHERE `id`='$data->id'");
         if ($updateUser) {
             echo json_encode(["success" => 1, "msg" => "data Updated."]);
         } else {
             echo json_encode(["success" => 0, "msg" => "data Not Updated!"]);
         }
    
} else {
    echo json_encode(["success" => 0, "msg" => "Please fill all the required fields!"]);
}
