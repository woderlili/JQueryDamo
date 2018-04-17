/**
 * Created by Administrator on 2018/3/5 0005.
 */
window.onload = function () {
    // 需求1：鼠标点击右侧按钮，当前图片显示下一张;
    // 需求2：鼠标点击左侧按钮，当前图片显示上一张;(逻辑相反)

    // 需求1：鼠标点击右侧按钮，当前图片显示下一张;
    // 思路：原来有索引值可以移动ul，现在没有了，自定义变量当做索引值;
    var num = 0;
    // 获取相关元素;
    var left = document.getElementById('left');
    var right = document.getElementById('right');
    var ul = document.getElementById('imgs');
    var arr = document.getElementById('arr');
    var ad = document.getElementsByClassName('inner')[0];
    var imgWidth = ad.offsetWidth;
    var box = document.getElementsByClassName('outer')[0];


    // 鼠标进入显示移开隐藏;
    box.onmouseover = function () {
        arr.style.display = 'block';
    }
    box.onmouseout = function () {
        arr.style.display = 'none';
    }

    // 需求1思路: 鼠标点击右侧，让自定义的索引值自增, 然后根据索引值移动ul;
    right.onclick = function () {
        num++;
        // num有取值范围, num==4是最大值, 等于5的时候就不能执行了, 还得便会4;
        if(num == 5) {
            num =4;
        }
        // 移动ul: ul移动得距离就是li对应得索引值个图片的宽;
        var sss = imgWidth * num;
        animate2(ul, -sss);
    }

    // 需求2: 鼠标点击左侧按钮, 当前图片显示上一张;(逻辑相反)
    left.onclick = function () {
        num--;
        // num有取值范围, num == 0是最小值, 等于-1的时候就步能执行了, 还得变回0；
        if (num == -1) {
            num = 0;
        }
        // 移动ul: ul移动得距离就是li对应得索引值个图片得宽;
        var sss = imgWidth * num;
        animate2(ul, -sss);

    }




    // 匀速动画封装;
    function animate2(element, target) {
        // 要用定时器，先清定时器
        clearInterval(element.timer);
        // 把定时器绑定到元素的自定义属性上
        element.timer = setInterval(function () {
            // 处理步长
            var step = target > element.offsetLeft ? 10 : -10;
            // 赋值
            element.style.left = element.offsetLeft + step + 'px';
            // 走过了或者
            // 不足一个步长就停止定时器;
            if (Math.abs(target-element.offsetLeft) <= Math.abs(step)) {// 负值的时候也要一步一步走
                // 直接设置目标位置；
                element.style.left = target+'px';
                clearInterval(element.timer);
            }
        }, 10);
    }

}
