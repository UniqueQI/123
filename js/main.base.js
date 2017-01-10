/*
 * main.base.js
 * @authors 詹永东 (m18829535746@example.org)
 * @date    2016-12-06 19:06:22
 * @version $Id$
 */




function love(){
	var aLove=document.getElementsByClassName('L_mainLove');
	var aCollect=document.getElementsByClassName('L_mainCollect');
	for (var i=0; i<aLove.length;i++){
		aLove[i].index=2;
		aLove[i].onclick=function(){
			this.index+=1;
			if (this.index%2==1){
				this.style.background="url(../icons/love.png) no-repeat -27px 0px";
			}
			else{
				this.style.background="url(../icons/love.png) no-repeat 0px 0px";
			}
		}
	}
	for (var i=0; i<aCollect.length;i++){
		aCollect[i].index=2;
		aCollect[i].onclick=function(){
			this.index+=1;
			if (this.index%2==1){
				this.style.background="url(../icons/collect.png) no-repeat -27px 0px";
			}
			else{
				this.style.background="url(../icons/collect.png) no-repeat 0px 0px";
			}
		}
	}
}

function tab(){
	var oTab=document.getElementById('tab');
    var aLi=getByClass(oTab, 'nav')[0].getElementsByTagName('li');
    var aA=oTab.getElementsByTagName('ul')[0].getElementsByTagName('a');
    var aDiv=getByClass(oTab, 'box');
    var i=0;

    aDiv[0].style.display='block';
    
    for(i=0; i<aLi.length; i++)
    {
        aLi[i].index=i;
        aLi[i].onmouseover=function()
        {
            for(i=0; i<aLi.length; i++)
            {
                aLi[i].className='';
                aDiv[i].style.display='none';
            }
            this.className='active';
            aDiv[this.index].style.display='block';
        };
        aA[i].onfocus=function(){this.blur();};
    }
}


function getByClass(oParent, sClassName)
{
    var aElm=oParent.getElementsByTagName('*');
    var aArr=[];
    for(var i=0; i<aElm.length; i++)
    {
        if(aElm[i].className==sClassName)
        {
            aArr.push(aElm[i]);
        }
    }
    return aArr;
};
function label(){
	var oDiv=document.getElementById('label_box');
	var aA=document.getElementsByClassName('labelText');
	var i=0;
	for(i=0;i<aA.length;i++)
	{
		aA[i].pause=1;
		aA[i].time=null;
		initialize(aA[i]);
		aA[i].onmouseover=function()
		{
			this.pause=0;	
		};
		aA[i].onmouseout=function()
		{
			this.pause=1;
		};
	}
	setInterval(starmove,24);
	function starmove()
	{
		for(i=0;i<aA.length;i++)
		{
			if(aA[i].pause)
			{
				domove(aA[i]);
			}
		}
	}
	function domove(obj)
	{
		if(obj.offsetTop<=-obj.offsetHeight)
		{
			obj.style.top=oDiv.offsetHeight+"px";
			initialize(obj);
		}
		else
		{
			obj.style.top=obj.offsetTop-obj.ispeed+"px";	
		}
	}
	function initialize(obj)
	{
		var iLeft=parseInt(Math.random()*oDiv.offsetWidth);
		var scale=Math.random()*1+1;
		var iTimer=parseInt(Math.random()*1500);
		obj.pause=0;

		obj.style.fontSize=12*scale+'px';

		if((iLeft-obj.offsetWidth)>0)
		{
			obj.style.left=iLeft-obj.offsetWidth+"px";
		}
		else
		{
			obj.style.left=iLeft+"px";
		}
		clearTimeout(obj.time);
		obj.time=setTimeout(function(){
			obj.pause=1;
		},iTimer);
		obj.ispeed=Math.ceil(Math.random()*4)+1;
	}
}

function releaseLabel(){
	var aLabel=document.getElementsByClassName('releaseLabel');
	var aChoose=document.getElementsByClassName('releaseChoose');
	for (var i = 0; i < aChoose.length; i++)
	{
       	aChoose[i].index=i;
		aChoose[i].onclick=function(){
			aChoose[this.index].style.display="none";
			aLabel[this.index].style.display="block";
			aLabel[this.index].type="text";
		}
		aLabel[i].index=i;
		aLabel[i].onclick=function(){
			aLabel[this.index].style.display="none";
			aLabel[this.index].type="button";
			aChoose[this.index].style.display="block";
		}
	}
}

function release(){
	var oRelease=document.getElementsByClassName('release');
	var oDiv1=document.getElementById('L_release');
	var oSpan=document.getElementsByClassName('oSpan');
	var oTextarea=document.getElementsByClassName('oText');
	var oDiv2=document.getElementsByClassName('ifYes');
	var oClose=document.getElementsByClassName('releaseTit_close');
	var oYes=document.getElementsByClassName('yes');
	var oNo=document.getElementsByClassName('no');
	var oDraft=document.getElementsByClassName('draft');
	var aLabel=document.getElementsByClassName('releaseLabel');
	var aChoose=document.getElementsByClassName('releaseChoose');

	oRelease[0].onclick=function(){
		oDiv1.style.display="block";
	}
	oClose[0].onclick=function(){
		oDiv2[0].style.display="block";
	}
	oYes[0].onclick=function(){
		oDiv1.style.display="none";
		oDiv2[0].style.display="none";
		for (var i = 0; i < aChoose.length; i++) {
			aChoose[i].style.display="block";
			aLabel[i].style.display="none";
		}
	}
	oNo[0].onclick=function(){
		oDiv2[0].style.display="none";
	}
	oDraft[0].onclick=function(){
		oDiv1.style.display="none";
		oDiv2[0].style.display="none";
	}
}
// function nowRelease(){
// 	alert('lalal1');
// 	return false;
// }


function json(){
	ajax_json('homepage.php', function (str){
		var arr=eval("("+str+")");
		var aLove=document.getElementsByClassName('L_mainLove');
		var aCollect=document.getElementsByClassName('L_mainCollect');
		var aMain=document.getElementsByClassName('L_main');
		var aName=document.getElementsByClassName('L_mainName');
		var aText=document.getElementsByClassName('L_mainText');
		var aPhoto=document.getElementsByClassName('L_mainPhoto');
		var aL_mainDate=document.getElementsByClassName('L_mainDate');
		var aL_mainSource=document.getElementsByClassName('L_mainSource');
		var aL_LoveAmount=document.getElementsByClassName('L_LoveAmount');
		var aL_CollectAmount=document.getElementsByClassName('L_CollectAmount');
		var oMore1=document.getElementById('L_more1');
		var oMore2=document.getElementById('L_more2');
		var account=arr[0].length-3;
		oMore1.onclick=function(){
		for (var i = 0; i <account; i++){
			$(".L_more1").before('<div class="L_main"><div class="userInfo"><a href="#"><img src="" alt="" class="L_mainPhoto"></a><span class="L_mainName" title="作者昵称"></span><div class="L_mainLove" title="点赞"></div><div class="L_mainCollect" title="收藏"></div></div><div class="L_arrow"></div><div class="L_mainText"></div><div class="L_mainInfo"><span class="L_mainDate" title="分享日期"></span><span class="L_mainSource" title="作品来源"></span><span class="L_LoveAmount" title="点赞次数"></span><span class="L_CollectAmount" title="搜索次数"></span></div></div>');
			}
			more();
			oMore1.style.display="none";
			oMore2.style.display="block";
		}
		for (var i = 0; i < aMain.length; i++) {
			aName[i].innerHTML=arr[0][i].fl_user_id;
			aText[i].innerHTML=arr[0][i].fl_content;
			aPhoto[i].src=arr[0][i].fl_picture;
			aL_mainDate[i].innerHTML=arr[0][i].fl_date;
			aL_mainSource[i].innerHTML=arr[0][i].fl_power;
			aL_LoveAmount[i].innerHTML=arr[0][i].fl_thumbs_up;
			aL_CollectAmount[i].innerHTML=arr[0][i].fl_search;
			if (0) {
				aLove[i].style.background="url(../icons/love.png) no-repeat -27px 0px";
			}
			if (0) {
				aCollect[i].style.background="url(../icons/collect.png) no-repeat -27px 0px";
			}
		}
	});
}
function more(){
	var aMain=document.getElementsByClassName('L_main');
	json();
	love();
}
function jsonRight(){
	ajax_json('homepage.php', function (str){
		var arr=eval("("+str+")");
		var aboxOne=document.getElementsByClassName('boxOne');
		var aboxTwo=document.getElementsByClassName('boxTwo');
		var aboxThree=document.getElementsByClassName('boxThree');
		for (var i = 0; i <8; i++) {
			aboxOne[i].innerHTML=arr[1][i].fl_content;
			aboxTwo[i].innerHTML=arr[2][i].fl_content;
			aboxThree[i].innerHTML=arr[1][i].fl_content;
		}
	});
}

// function reRelease(){
// 	var oreleaseNow=document.getElementsByClassName('releaseNow');
// 	releaseNow[0].onclick=function(){
// 		json();
// 		love();
// 	}
// }




window.onload=function(){
	// var nowRelease=document.getElementsByClassName('releaseForm');
	// nowRelease[0].onsubmit=function(){
	// 	console.log('asd');
	// }
	tab();
	love();
    label();
    release();
    json();
    jsonRight();
    releaseLabel();
    // reRelease();
};