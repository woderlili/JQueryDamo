/**
 * Created by Administrator on 2018/3/5 0005.
 */


(function () {

    var outer = document.getElementsByClassName('outer')[0];
    var inner = outer.firstElementChild || outer.firstChild;
    var imgWidth = inner.offsetWidth;
    var ol = inner.lastElementChild || inner.lastChild;
    var olLiArr = ol.children;
    var ul = ol.previousElementSibling || ol.previousSibling;

    for (var i = 0; i < olLiArr.length; i++) {
        olLiArr[i].index = i;
        olLiArr[i].onmouseover = function () {
            for (var j = 0; j < olLiArr.length; j++) {
                olLiArr[j].className = '';
            }
            this.className = 'current';
            var sss = imgWidth * this.index;
            animate1(ul, -sss);
            console.log(this.index);
            console.log(-sss);
        }
    }
    function animate1(element, target) {
        clearInterval(element.timer);
        element.timer = setInterval(function () {
            var step = target > element.offsetLeft ? 10 : -10;
            element.style.left = element.offsetLeft + step + 'px';
            if (Math.abs(target-element.offsetLeft) <= Math.abs(step)) {// 负值的时候也要一步一步走
                element.style.left = target+'px';
                clearInterval(element.timer);
            }
        }, 3);
    }

})