<?php
session_start();
include("musql.php");
//如果参数传递正确
if(isset($_POST['user'])&&isset($_POST['password'])&&isset($_POST['identify']))
{
	$ly=$_POST['user'];
	$lq=$_POST['password'];
	//判断数据库中是否存在已注册账户
	$result=mysql_query("select * from account where user=$ly");
	$num=mysql_num_rows($result);
	//若存在已注册账户
	if(!$num)
	{
		//判断验证码是否正确
		if($_POST['identify']==$_SESSION['identify'])
		{
			mysql_query("insert into account(user,password)values('$ly','$lq')");
		}
		//若验证码不正确
		else
		{
				echo "验证码输入错误！";
		}	
	}
	//若该账户未被注册过
	else
	{
		echo "该用户已注册！";
	}
}
unset($_SESSION['identify']);
session_destroy();
?>