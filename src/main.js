const viewer = require('./lib/viewer')
var config = {
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
var v = new viewer.Viewer(config);