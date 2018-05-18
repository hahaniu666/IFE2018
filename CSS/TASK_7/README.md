# jQuery 一些操作

#### 1.监听输入框输入
    $("#email").bind("input propertychange change", function (event) {
         console.log($("#email").val())
     });
#### 2.获取输入框内容

      $(" #test ").val()
      $(" input[ name='test' ] ").val()
      $(" input[ type='text' ] ").val()
      $(" input[ type='text' ]").attr("value")   
    
#### 3.输入框获取焦点

    $('#email').focus(function(){
    
    })
#### 3.输入框失去焦点
    $('#email').blur(function(){
    
    })
#### 4.设置样式
     $('#email').css({"border-bottom": "1px solid #ddd"});多个用逗号，隔开
#### 5.添加class属性
     $(".btn").addClass("animated tada");
#### 6移除class类名
     $(".btn").removeClass("animated tada");
#### 7.点击事件
      $('.btn').click(function () {
            console.log(' $(\'#email\').val()', $('#email').val());
       })