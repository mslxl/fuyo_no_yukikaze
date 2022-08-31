require("jquery");
let {Viewer} = require('./viewer.js')

$("body").css("background", "#000")

let config = {
    width: window.innerWidth,
    height: window.innerHeight,
    left: '0px',
    bottom: '0px',
    basePath: 'assets/',
    role: 'xuefeng_3',
    background: 'assets/bg.png',
    opacity: 1,
    mobile: false
}
let v = new Viewer(config);
window.viewer = v;

$("canvas").css("display", "none")
$(document).ready(()=>{
    setTimeout(()=>{
        console.log("Yukikaze sama appears!")
        $("canvas").css("display", "block")
        window.viewer.startAnimation("login", "base")
        window.viewer.lastPlayTime = Date.now() + 5 * 1000 // 原本会等待 5s，使之等待 10s
    }, 1000)
})

document.addEventListener("visibilitychange",()=>{
    if(document.visibilityState === "visible" && Date.now() - window.viewer.lastPlayTime > 10 * 1000){
        console.log("Yukikaze sama back!")
        window.viewer.startAnimation("home", "base")
    }
})