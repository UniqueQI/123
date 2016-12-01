function ajax(type,url,idName)
{
	//获取需要设置的元素
	var oIdName=document.getElementById(idName);

	//1.创建ajax对象
	var oAjax=null;
	if(window.XMLHttpRequest)
	{
		oAjax=new XMLHttpRequest();
	}
	else
	{
		oAjax=new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	//2.连接服务器——open(方法, url, 是否异步)
	oAjax.open(type, url, true);

	//3.在发送请求前，规定返回值类型为blob（blob对象，file对象）
	oAjax.responseType='blob';
	
	//4.发送请求
	oAjax.send();
	
	//4.接收返回——OnReadyStateChange
	oAjax.onreadystatechange=function ()
	{
		if(oAjax.readyState==4)
		{
			if(oAjax.status==200)
			{
				// 创建一个blob对象存放返回的二进制数据
				//var blob=new Blob();
				//blob=oAjax.response;

				//直接将返回的二进制数据用createObjectURL指定一个URL
				oIdName.src=window.URL.createObjectURL(oAjax.response);
                  // console.log(oAjax.response);
				//此处涉及到优化问题，即将加载完;的URL立即释放
				//代码有问题，所以选择等待关闭页面后再释放
				// code.onload=function(){
				// 	code.src=window.URL.revokeObjectURL(oAjax.response);
				// }
			}
		}
	};
}