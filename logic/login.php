<?php
    session_start();
    //引入数据库
    include "sql.php";
    header("Content-type:text/html;charset=utf-8");
    //接收来自login.html的数据
    //下拉框的数据
    $username = $_POST['username'];
    $pwd = $_POST['passward'];
    //查询
    $sql = "SELECT * FROM USER WHERE USERNAME = $username ";
    //判断是否查询到信息
    $result = mysqli_query($db,$sql);
    // 判断结果集是否为空即可
    // 如果 result == null 说明用户不存在
    //  var_dump($result);
    if(!$result->num_rows){
       $error = array("msg" => "该用户不存在！");
       echo json_encode($error,JSON_UNESCAPED_UNICODE);
    }else{
        while($date = mysqli_fetch_assoc($result))
        {
            if($date['username']==$username&&$date['pwd']==$pwd){
                $_SESSION['username'] = $data['username'];
                $_SESSION['passwoed'] = $data['pwd'];
                $_SESSION['id'] = $data['id'];
                 $date['msg'] = "登录成功！";
                 $data =  json_encode($date,JSON_UNESCAPED_UNICODE);
                 echo $data;
            }else{
                $error = array("msg"=>"密码错误！");
                echo json_encode($error,JSON_UNESCAPED_UNICODE);
            }
        }
    }
?>