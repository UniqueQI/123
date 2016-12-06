/*
 * main.base.js
 * @authors 詹永东 (m18829535746@example.org)
 * @date    2016-12-06 19:06:22
 * @version $Id$
 */

window.onload=function(){
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
};