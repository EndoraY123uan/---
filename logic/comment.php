<?php
    session_start();
    include('sql.php');
    /*获取评论内容*/
    $content = $_POST['discuss-content'];
     /*获取评论时间*/
    date_default_timezone_set('PRC');
    $time=date("Y-m-d H:i:s");
    /*获取评论人的id*/
    $user_id = $_SESSION['id'];
    /*获取评论歌单id*/
    $stylename = rand("1","5");
    /*存入数据库*/
    $sql = "insert into comment (stylename,content-detail,comment-time,user-id) values ('{ $stylename}','{$content}','{$time}','{$user_id}')";

    $is = $db -> query($sql);
    echo "<script>alert(\"评论成功！\");</script>";
    // 跳转网页
    header("location: ../src/detail-1.php");
?>