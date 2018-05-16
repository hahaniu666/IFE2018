# 3D旋转展示


属性 | 描述
---|---
transform | 向元素应用 2D 或 3D 转换。
transform-origin | 允许你改变被转换元素的位置。
transform-style | 规定被嵌套元素如何在 3D 空间中显示。
perspective | 规定 3D 元素的透视效果。
perspective-origin|规定 3D 元素的底部位置。
backface-visibility|定义元素在不面对屏幕时是否可见。


#### 1. 首先是html布局  一个父级div 加两个img

        <div class="box">
            <img class="obverseSide" src="正面.jpg" alt="">
            <img class="opposite" src="反面.jpg" alt="">
        </div>
    
#### 2. 要做3D效果 需要用到“景深” perspective 建议放在父元素

> 激活一个3D空间  景深 景深就是我们的肉眼距离显示器的距离 可以放在动画元素中



#### 3. 子元素中 要加入 transform-style: preserve-3d;

> 这个属性指定了子元素如何在空间中展示只有两个属性值：flat（默认）和preserve-3d flat 表示所有子元素在2D平面呈现 preserve-3d 表示所有子元素在3D平面呈现（prederve是保护、维持的意思，preserve-3d就是保持三维空间的意思）当然如果我们想要3D的效果，就要使用 transform-style: preserve-3d;

#### 4. backface-visibility 定义元素在不面对屏幕时是否可见。