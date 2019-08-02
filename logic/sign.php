<?php
    session_start();
    //引入数据库
    include "sql.php";
    header("Content-type:text/html;charset=utf-8");
    //接收来自login.html的数据
    //下拉框的数据
    $username = $_POST['username'];
    $pwd = $_POST['passward'];
    $repwd = $_POST['repassward'];
    if($pwd != $repwd){
        $error = array("msg" => "两次密码不一致！");
        echo json_encode($error,JSON_UNESCAPED_UNICODE);
    }else{
        //写入数据库
       $sql ="INSERT INTO USER (username,pwd) VALUES($username,$pwd)";
       $result = mysqli_query($db,$sql);
       if ($result) {
            mysqli_close($db);
       }
        //echo $sql;
     echo json_encode($_POST);
    }
   // echo json_encode($_POST);

 ?>