var last = Date.now();
// 创建一个iframe
var ifr = document.createElement('IFRAME');
ifr.src = url;
// 飘出屏幕外
ifr.style.position = 'absolute';
ifr.style.left = '-1000px';
ifr.style.top = '-1000px';
ifr.style.width = '1px';
ifr.style.height = '1px';
// 设置一个4秒的动画用于检查客户端是否被调起
ifr.style.webkitTransition = 'all 1s';
document.body.appendChild(ifr);
setTimeout(function(){
    // 监听动画完成时间
    ifr.addEventListener('webkitTransitionEnd', function(){
        document.body.removeChild(ifr);
        if(Date.now() - last < 1100){
            // 如果动画执行时间在预设范围内，就认为没有调起客户端
            console.log("noApp");
            no_app_callback && no_app_callback();
        } else{
            // 动画执行超过预设范围，认为调起成功
            console.log("hasApp");
        }
    }, false);
    // 启动动画
    ifr.style.left = '-10px';
}, 0);