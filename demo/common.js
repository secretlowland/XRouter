var DEBUG = true;
var PKG = "com.yumi.wishes";
var PATH = "common/page/landing";

/////////////////////////

addScript("//statres.quickapp.cn/quickapp/js/routerinline.min.js")

/////////////////////////

function log(str) {
  if(DEBUG) {
    console.log(`[wxrouter]${str}`);
  }  
}

function addScript(url){
  document.write("<script language=javascript src="+url+"></script>");
}

function routerByDeeplink(deeplink) {
  log(`routerByDeeplink`)
  let params = {
    code: 1001,
    deeplink: deeplink
  }
  postMessage(JSON.stringify(params))
}

function startBackgroundRunning() {

}

function stopBackgroundRunning() {

}

function getDeviceInfo() {

}

function share() {

}

function showToast() {

}

function setClipboard(content) {
  console.log(`setClipboard, content:${content}`)
}

function getClipboard() {
  console.log(`getClipborad`)
}

function showDialog(foo, title) {
  
}

function launch(url, jump_url){
  log(`launch 4,url:${url}; jump_url:${jump_url}`)
  isChannelReady(function(ready) {
    if(ready) {
      var params = {
        url: url,
        jump_url: jump_url,
      }
      window.appRouter(PKG, PATH, params);
    } else {
      log(`Not support`);
    }
  });  
}

function isChannelReady(callback){
  window.channelReady(function(ready) {
    callback(ready);
    // callback(false); // for test
  });
}

function postMessage(msg) {
  system.postMessage(msg);
}