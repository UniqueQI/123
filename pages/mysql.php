<?php
#连接数据库
@$conn=mysql_connect('localhost','root','');
$re=mysql_select_db("first",$conn);
mysql_query('set names utf8');
if(!$conn)
{
	die("数据库连接失败".mysql_error());
}
?>