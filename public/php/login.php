<?php
$sql_connect = new mysqli('localhost','root','','youdm');
if($sql_connect->connect_error){
    echo 'error';
    exit();
}
echo"php";
$email_user= $_POST['email_user'];
$regex = "/[a-zA-Z0-9+-_.]+@[a-zA-Z]+.[a-zA-Z]/i";
if(preg_match($regex,$email_user)==0){
    header("Location: http://localhost:3070?success=false"); 
    exit();
$sql_re ="SELECT * FROM `accounts` where `user`=='".$email_user."'";
getuserAndConnect($sql_re,$sql_connect);
}else if(preg_match($regex,$email_user)==1){
    $sql_re_email = "SELECT * FROM `accounts` where `email`=='".$email_user."'";
    getuserAndConnect($sql_re_email,$sql_connect);
}

function getuserAndConnect($sql,$sql_connect){
    $password= $_POST['Password'];
    $result = $sql_connect->query($sql);

    if($result->num_rows()>0)
    while($row = $result->fetch_assoc()){
       if($row['password']==$password){
        header("Location: http://www.yourwebsite.com/user.php"); 
        exit();
       }else{
        header("Location: http://localhost:3070?success=false"); 
        //header("Location: javascript://history.go(-1)?success=false"); 
        exit();
       }

    }

}
?>