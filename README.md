# XRouter

## Introduce

XRouter是一个可以跳转并加载H5的JS插件。当你的H5中集成了XRouter插件后，在微信等场景下的分享连接打开H5后可以自动跳转到一个特定的应用去加载H5，在这个应用中。你的H5可以跳转到系统浏览器、应用商店，或者其他任何第三方APP。当然，还支持获取手机设备信息、获取定位信息、设置剪切板等丰富的JS API。

## USAGE

下载JS文件到本地，然后在H5中引入该JS文件后即可使用相关接口。

主要接口有：

- jumpByDeeplink
- jumpToSystemBrowser
- jumpToAppMarket
- setClipborad
- getDeviceInfo

后续会支持更多的API。

