<?php
session_start();
include("musql.php");
if(isset($_POST['user'])&&isset($_POST['password'])&&isset($_POST['identify']))
{
	$ly=$_POST['user'];//用户名
	$lq=$_POST['password'];//用户密码
 	//从数据库中查找是否有该用户名
    $result=mysql_query("select * from account where user=$ly and password=$lq");
    $num=mysql_num_rows($result);
    //若该用户名存在且密码验证码都正确
    if($num&&($_POST['identify']==$_SESSION['identify']))
    {
    	//header("location:1.php")
    	//echo "登录成功！";
        header("location:pages/main.html");
    }
    //若该用户名不存在或者密码不正确或验证码不正确
    else
    {
    	//header("location:1.php");
    	echo "登录失败";
    }
}
else
{
	echo "参数传递出错！";
}
unset($_SESSION['identify']);
session_destroy();
?>