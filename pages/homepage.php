<?php
include"mysql.php";
$arr=mysql_query("select * from tb_share_content order by fl_id desc");
$share_content=array();
$hot_content=array();
$welcome_content=array();
$all=array();
for($i=0;$result=mysql_fetch_assoc($arr);$i++)//从数据库中取出数据
{
/*	$result['fl_user_id']."<br/>";//用户名
	$result['fl_content']."<br/>";//分享内容
	$result['fl_picture']."<br/>";//分享时所配照片路径
	$result['fl_date']."<br/>";//分享时间 
	$result['fl_power']."<br/>";//分享内容为自创还是转载
	$result['fl_search']."<br/>";//该分享内容被点击搜索的次数
	 $result['fl_thumbs_up']."<br/>";//该分享内容被点赞次数
*/
	
		$share_content[$i]=$result;
}
$arr=mysql_query("select * from tb_share_content order by fl_search desc");
for($i=0;$result=mysql_fetch_assoc($arr);$i++)//按搜索次数对数据库信息进行排序
	{
		$hot_content[$i]=$result;
	}

$arr=mysql_query("select * from tb_share_content order by fl_thumbs_up desc");
for($i=0;$result=mysql_fetch_assoc($arr);$i++)//按搜索次数对数据库信息进行排序
	{
		$hot_welcome[$i]=$result;
	}
$all[0]=$share_content;
$all[1]=$hot_content;
$all[2]=$hot_welcome;
echo json_encode($all);
 ?>