function byId(id){
	return document.getElementById(id);
}

function saveGoogle(){
	  var obj = {};
	if(byId('haiwai').checked) obj['sotapit']='haiwai';else  obj['sotapit']='neidi';

   
    chrome.storage.sync.set(obj);



}

function init(){
	chrome.storage.sync.get('sotapit', function(details){
window.globalvar= details.sotapit||'haiwai';
if(globalvar=='haiwai')byId('haiwai').checked=true;else byId('neidi').checked=true;
	saveGoogle();
    });

	
}
document.addEventListener("DOMContentLoaded",init,false);
