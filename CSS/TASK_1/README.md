
# 贝塞尔曲线用法

* 需用 transition-timing-function 来规定过渡曲线效果

* [贝塞尔曲线制作网站](http://cubic-bezier.com/#1,-0.87,0,1.59)               
```$xslt
     linear                        规定以相同速度开始至结束的过渡效果（等于 cubic-bezier(0,0,1,1)）。
     ease                          规定慢速开始，然后变快，然后慢速结束的过渡效果（cubic-bezier(0.25,0.1,0.25,1)）。
     ease-in                       规定以慢速开始的过渡效果（等于 cubic-bezier(0.42,0,1,1)）。
     ease-out                      规定以慢速结束的过渡效果（等于 cubic-bezier(0,0,0.58,1)）。
     ease-in-out                   规定以慢速开始和结束的过渡效果（等于 cubic-bezier(0.42,0,0.58,1)）。
     cubic-bezier(n,n,n,n)         在 cubic-bezier 函数中定义自己的值。可能的值是 0 至 1 之间的数值
    
     贝塞尔曲线制作网站               http://cubic-bezier.com/#1,-0.87,0,1.59
```
   