<?php

//开启会话
//session_start();
//预先定义数据库连接参数
$host = '127.0.0.1';
$user = 'root';
$pwd  = '123456789';
$dbname = 'music';


//链接到数据库
$db = new mysqli($host,$user,$pwd,$dbname);
//检查是否成功
if ($db->connect_errno <> 0){
	//echo "连接失败";
	echo $db->connect_error;
}
//echo "连接成功！";
$db->query("set names utf8");

?>

