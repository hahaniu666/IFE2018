// 为兼容 ES5 浏览器环境（主要是 IE8 ~ IE11）而引入的 polyfill，对兼容性没有要求的项目可以不写此行
// import 'babel-polyfill'
import mainStyle from "./main.css"
import san from 'san'
// import _san from './san/san.js';
import conf from "./conf";

// import sanCss from "./san/san1.css"
// import sanCss1 from "./san/san.scss"
// import sanCss2 from "./san/san2.scss"

// import san from 'san'

console.log('conf', conf.app);
// console.log('sanCss', sanCss);
// console.log('_san', _san.a);
// console.log('sanCss1', sanCss1);
// console.log('sanCss2', sanCss2);
//
// _san();




import {router} from 'san-router'

import home from "./home/home.san"
import dataHandle from "./dataHandle/dataHandle.san"

router.add({rule: '/', Component: home, target: '#app'});
router.add({rule: '/dataHandle', Component: dataHandle, target: '#app'});

// start
router.start();
