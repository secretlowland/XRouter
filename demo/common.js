var DEBUG = true;
var PKG = "com.qunar.quick";
var PATH = "Home/Audio";

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

function launch(deeplink){
  isChannelReady(function(ready) {
    if(ready) {
      var params = {
        deeplink: deeplink
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