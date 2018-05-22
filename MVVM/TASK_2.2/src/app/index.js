// 为兼容 ES5 浏览器环境（主要是 IE8 ~ IE11）而引入的 polyfill，对兼容性没有要求的项目可以不写此行
// import 'babel-polyfill'
import san from 'san'
import conf from "./conf";

console.log('conf', conf.app);


import {router} from 'san-router'

import home from "./home/home.san"
import dataHandle from "./dataHandle/dataHandle.san"
import task2spot3 from "./task2.3/view.san"


router.add({
    rule: '/',
    Component: home,
    target: '#app'
});
router.add({
    rule: '/dataHandle',
    Component: dataHandle,
    target: '#app'
});
router.add({
    rule: '/dataHandle',
    Component: dataHandle,
    target: '#app'
});
router.add({
    rule: '/task2spot3',
    Component: task2spot3,
    target: '#app'
});

// start
router.start();
