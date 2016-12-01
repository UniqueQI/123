<?php
session_start();
header("Content-type:image/jpeg");
//创建画布
$img=imagecreatetruecolor(120,60);
$bg=imagecolorallocate($img,255,255,255);
//填充
imagefill($img,0,0,$bg);
//划线
for($i=0;$i<10;$i++)
{
	$color=imagecolorallocate($img,mt_rand(0,255),mt_rand(0,255),mt_rand(0,255));
	imageline($img,mt_rand(0,150), mt_rand(0,50),mt_rand(0,150),mt_rand(0,50),$color);
}
//画干扰点
for($i=0;$i<50;$i++)
{
	$color=imagecolorallocate($img,mt_rand(0,255),mt_rand(0,255),mt_rand(0,255));
	imagesetpixel($img,mt_rand(0,150),mt_rand(0,50),$color);
}
//实现随机数字
$font2='';
 for($i=0;$i<4;$i++){
     $fontSize=6;
     //颜色随机
     $fontColor=imagecolorallocate($img,rand(0,255),rand(0,255),rand(0,255));
     //数字随机
     $font=rand(0, 9);
     $font2.=$font;
     //位置坐标
     $x=rand(22,25)*$i;
     $y=rand(5, 10);

     //绘制文字
     imagestring($img, $fontSize, $x, $y, $font, $fontColor);
 }
$_SESSION['identify']=$font2;
imageline($img,mt_rand(0,150), mt_rand(0,50),mt_rand(0,150),mt_rand(0,50),$color);
imagejpeg($img);
//销毁图像资源
imagedestroy($img);
?>