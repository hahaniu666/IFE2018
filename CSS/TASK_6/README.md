# js中的一些操作

    function $(selector) {
        return document.querySelectorAll(selector);
    }
    
封装一个选择dom的事件，用法如下：

如：html中布局如下

    <div class="wrapper">
        <div class="img-box"></div>
        <ul class="content">
            <li>
                <img src="img/cat1.jpg" />
            </li>
            <li>
                <img src="img/cat2.jpg" />
            </li>
            <li>
                <img src="img/cat3.jpg" />
            </li>
            <li>
                <img src="img/cat4.jpg" />
            </li>
            <li>
                <img src="img/cat5.jpg" />
            </li>
        </ul>
    </div>
    
我们想选择  **class="wrapper"** 这个dom，则

     $(".wrapper")[0]
    
若是选择所有li，则

     var elements = $(".content li");   