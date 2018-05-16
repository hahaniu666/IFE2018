# hover选择兄弟元素  

1.当hover的元素和需要改变样式的元素是父子关系的时候，可以这么写（.container:hover ul.ul>li:nth-child(2)）直接在hover后面加上空格，加上需要改变你的元素
     
  [查看效果](https://hahaniu666.github.io/IFE2018/CSS/TASK_3/test2.html)
  
```css
    .container:hover ul.ul > li:nth-child(2) {
        background: #000;
    }
```

    <div class="container">
        <ul class="ul">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>       

2.此时是hover container容器，改变wrap框的背景颜色，但发现container和wrap不是父子关系而是兄弟关系，这时候这样写（.contianer:hover div.wrap{background: #000;}）不起效果。应该的写法是（.container:hover +.wrap{background:#f00;}）

 [查看效果](https://hahaniu666.github.io/IFE2018/CSS/TASK_3/test.html)

```css
    .container:hover + .wrap {
      background: #f00;
    }
```

     <div class="container">
         <ul class="ul">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
         </ul>
     </div>
     <div class="wrap"></div>  
     
     
# 过渡参数

 属性 | 描述 
--- |--- 
transition | 简写属性，用于在一个属性中设置四个过渡属性。 
transition-property | 规定应用过渡的 CSS 属性的名称。
transition-duration | 定义过渡效果花费的时间。默认是 0。
transition-timing-function | 规定过渡效果的时间曲线。默认是 "ease"。
transition-delay | 规定过渡效果何时开始。默认是 0。


# 实例

### 1.在一个例子中使用所有过渡属性：
    
```css
        div {
            width: 100px;
            height: 100px;
            background: yellow;
            transition-property: width;
            transition-duration: 1s;
            transition-timing-function: linear;
            transition-delay: 2s;
            /* Firefox 4 */
            -moz-transition-property: width;
            -moz-transition-duration: 1s;
            -moz-transition-timing-function: linear;
            -moz-transition-delay: 2s;
            /* Safari and Chrome */
            -webkit-transition-property: width;
            -webkit-transition-duration: 1s;
            -webkit-transition-timing-function: linear;
            -webkit-transition-delay: 2s;
            /* Opera */
            -o-transition-property: width;
            -o-transition-duration: 1s;
            -o-transition-timing-function: linear;
            -o-transition-delay: 2s;
        }

        div:hover {
            width: 200px;
        }

```

 [查看效果](https://hahaniu666.github.io/IFE2018/CSS/TASK_3/test4.html)


#### 上面的效果简写如下：

```css

        div {
            width: 100px;
            height: 100px;
            background: yellow;
            transition-property: width 1s linear 2s;
            /* Firefox 4 */
            -moz-transition: width 1s linear 2s;
            /* Safari and Chrome */
            -webkit-transition: width 1s linear 2s;
            /* Opera */
            -o-transition: width 1s linear 2s;
        }

        div:hover {
            width: 200px;
        }
```

 [查看效果](https://hahaniu666.github.io/IFE2018/CSS/TASK_3/test5.html)
