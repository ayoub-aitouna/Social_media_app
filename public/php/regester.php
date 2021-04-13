<?php
$sql_connect = new mysqli('localhost','root','','youdm');
if($sql_connect->connect_error){
    echo 'error';
    exit();
} if(isset( $_POST['username'],$_POST['fullname'],$_POST['email_user'],$_POST['password'],$_POST['day'], $_POST['month'],$_POST['year'],$_POST['gender'])){
//     $userName = $_POST['username'];
//     $fullname = $_POST['fullname'];
//     $email= $_POST['email_user'];
//     $password= $_POST['password'];
//     $day= $_POST['day'];
//     $month= $_POST['month'];
//     $year= $_POST['year'];
//     $gender = $_POST['gender'];
//     if(!empty($_POST['gender'])){
//         foreach($_POST['gender']as $check){
//             echo $check;
//         }
//     }
    
// }


    $userName = $_POST['username'];
    $fullname = $_POST['fullname'];
    $email= $_POST['email'];
    $password= $_POST['password'];
    $day= $_POST['day'];
    $month= $_POST['month'];
    $year= $_POST['year'];
    $gender = $_POST['gender'];
    $d=strtotime($month." ". $day." ".$year);

$BirthdayDate=date('Y-m-d',$d);
/***ceation of table 
create TABLE `Account`(Id int NOT NULL AUTO_INCREMENT, Username varchar(20) ,
Fullname varchar(20),Email varchar(100),Pass_word varchar(30),Birthday date ,Gender varchar(1),PRIMARY KEY(id))***/


    $sql_query = "INSERT INTO `Account` (Username,Fullname,Email,Pass_word,Birthday,Gender)VALUES
     ('".$userName."', '".$fullname."', '".$email."','".$password."','".$BirthdayDate."','".$gender."')";
    $reslut = $sql_connect->query($sql_query);
    if(!$reslut){
        header("Location: http://localhost:3070?regester=true?secuse=false");
        exit(); 
    }
    else{
        header("Location: http://www.yourwebsite.com/user.php");
        exit();
    }
}else{
    header("Location: http://localhost:3070?regester=true&secuse=false");
    exit(); 
}
?>