﻿

function withjQuery(callback, safe){
	if(typeof(jQuery) == "undefined") {
		var script = document.createElement("script");
		script.type = "text/javascript";
		script.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js";
var node = document.createElement('link');
node.rel = 'stylesheet';
node.type = 'text/css';
var urlcss=chrome.extension.getURL("buttons.css");
node.href = urlcss;
node.onload = function(){
	

};
node.onerror = function(){
	
};
document.getElementsByTagName('head')[0].appendChild(node);
		if(safe) {
			var cb = document.createElement("script");
			cb.type = "text/javascript";
			cb.textContent = "jQuery.noConflict();(" + callback.toString() + ")(jQuery, window);";
			script.addEventListener('load', function() {
				document.head.appendChild(cb);
			});
		}
		else {
			var dollar = undefined;
			if(typeof($) != "undefined") dollar = $;
			script.addEventListener('load', function() {
				jQuery.noConflict();
				$ = dollar;
				callback(jQuery, window);
			});
		}
		document.head.appendChild(script);
	} else {
		setTimeout(function() {
			//Firefox supports
			callback(jQuery, typeof unsafeWindow === "undefined" ? window : unsafeWindow);
		}, 30);
	}
}

withjQuery(function($, window){
	
	//$("#subtitle").html('<label> 自动登录</label>');
	function route(match, fn) {
		if( window.location.href.indexOf(match) != -1 ) {
			fn();
		};
	}
function rout( fn) {
		
			fn();
	
	}



	route("wenku.baidu.com/view/",function() {
		
	


		var thisURL = document.URL.substring(7,document.URL.length);
	var uurl= 'http://wap'+thisURL;

		$("#uploadDoc-0").after($("<div href='' style='padding: 10px 10px;background: #0BC32F;border-color: #259A33;border-right-color: #2CC03E;border-bottom-color:#2CC03E;color: white;border-radius: 10px;text-shadow: -1px -1px 0 rgba(0, 0, 0, 0.2);'/>").attr("id", "refreshButton")
.html("快捷复制").click(function() {
		$(this).html("正在转到复制页");
 //var action_url='wap'+thisURL;

window.location.replace(uurl);
submitForm();
      //chrome.tabs.create({ url: action_url });	
return false;
		}));

		
	});

	
	if( window.location.href.indexOf("v.youku.com/v_show/") != -1 ) {	
		//$("#subtitle").after('<input type="button" id="enableNotify" onclick="$(this).hide();" value="请点击以启用通告" style="line-height:25px;padding:5px;" />');


		var thisURL = document.URL.substring(29,document.URL.length);
	var uurl= 'http://www.sotapit.com/xia/xia.php/url/'+thisURL;
$("#fn_download").after($("<a href='' style='padding: 5px 5px;color: white;'/>").attr("id", "refreshButton")
.html("插件").click(function() {
		


window.open('https://chrome.google.com/webstore/detail/%E4%BC%98%E9%85%B7%E4%B8%80%E9%94%AE%E9%80%9A/alddjbjplgobbllfolehibiclbhmomla');
	
return false;
		}));
//$("#subtitle").after($("<a href="javascript:void((function(s,d,e){try{}catch(e){}var f='http://v.t.sina.com.cn/share/share.php?',u=d.location.href,p=['url=',e(u),'&title=',e(d.title),'&appkey=4144218247'].join('');function a(){if(!window.open([f,p].join(''),'mb',['toolbar=0,status=0,resizable=1,width=620,height=450,left=',(s.width-620)/2,',top=',(s.height-450)/2].join('')))u.href=[f,p].join('');};if(/Firefox/.test(navigator.userAgent)){setTimeout(a,0)}else{a()}})(screen,document,encodeURIComponent));" class="sina" title="分享到新浪微博" target="_blank" ></a>"));
		if ( $("#subtitle").length > 0 ) { 

		$("#subtitle").css("margin-left","-86px");
		$("#subtitle").css("font-size","17px");
		$("#subtitle").before($("<a href='' title='一键获取视频下载链接' style='font-size: 12px;' class='button'/>").attr("id", "refreshButton")
.html("快捷下载").click(function() {
		$(this).html("正在转到下载页");


window.open(uurl);
	
return false;
		}));}
		else
{ 


		
		$(".title").append($("<a href='' style='font-size: 12px;' class='button'/>").attr("id", "refreshButton")
.html("快捷下载").click(function() {
		$(this).html("正在转到下载页");


window.open(uurl);
	
return false;
		}));}




}

















	
	if( window.location.href.indexOf("www.tudou.com/") != -1 ) {	
		//$("#vcate_title").after('<input type="button" id="enableNotify" onclick="$(this).hide();" value="请点击以启用通告" style="line-height:25px;padding:5px;" />');


		var thisURL = document.URL.substring(0,document.URL.length);
	var uurl= 'http://www.flvcd.com/parse.php?kw='+thisURL;
//alert(uurl);


$("#shareMore").after($("<a href='' style='padding: 5px 5px;color: white;'/>").attr("id", "refreshButton")
.html("插件").click(function() {
		


window.open('https://chrome.google.com/webstore/detail/%E4%BC%98%E9%85%B7%E4%B8%80%E9%94%AE%E9%80%9A/alddjbjplgobbllfolehibiclbhmomla');
	
return false;
		}));





		$("#vcate_title").after($("<a href='' style='font-size: 12px;padding:0.3em 0.5em 0.1em 0.2em;' class='button'/>").attr("id", "refreshButton")
.html("快捷下载").click(function() {
		$(this).html("正在转到下载页");
//chrome.tabs.create({ url: uurl });
//
window.open(uurl);

return false;
		}));

}
	if( window.location.href.indexOf("www.flvcd.com/parse.php?kw=http://www.tudou.com/") != -1 ) {	
		 //alert('abbc');
  
var oInput=document.body.getElementsByTagName("A");   

  
var selectValues=""; 
   selectValues= oInput[16].href ;   
   
var ssValues="www.baidu.com";   
//window.location.replace(ssValues); 
window.location.replace(selectValues); 

//var abbc=document.getElementByClassName("link"); alert('abbc');window.location.replace(abbc);
	 //alert('abbc');


//window.opener=null;window.open('','_self');window.close();




}
	if( window.location.href.indexOf("http://www.flvcd.com/parse.php?kw=http://v.youku.com/") != -1 ) {	
		 //alert('abbc');
  //var selectValues=""; 
//var oInput=document.body.getElementsByTagName("font");   
 
  
  // selectValues= oInput[0].innerHTML;        
//alert("selectValues="+selectValues);    

var selectValues2=""; 
var oInput1=document.body.getElementsByTagName("A");   
for (var j=16;j<oInput1.length-7;j++) {   
  
   selectValues2= selectValues2 + j + oInput1[j].href;   
//window.open(oInput1[j].href);
}      
//alert("selectValues2="+selectValues2);   



//window.location.replace(selectValues); 

//var abbc=document.getElementByClassName("link"); alert('abbc');window.location.replace(abbc);
	 //alert('abbc');


//window.opener=null;window.open('','_self');window.close();




}







}, true);