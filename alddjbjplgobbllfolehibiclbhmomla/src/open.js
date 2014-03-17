function openit(){
	chrome.tabs.create({url:"http://www.sotapit.com/",active:true});
}
chrome.browserAction.onClicked.addListener(openit);
