# hover选择兄弟元素  

1.当hover的元素和需要改变样式的元素是父子关系的时候，可以这么写（.container:hover ul.ul>li:nth-child(2)）直接在hover后面加上空格，加上需要改变你的元素
     
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
     
     
