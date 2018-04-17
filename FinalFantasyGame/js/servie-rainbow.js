/**
 * Created by LJ on 2018/3/1.
 */
//入口函数
$(function () {

//彩虹客服- 小三角点击事件
////点击前判断如果列表显示则隐藏，如果隐藏则显示并改变三角
    $('.service>dl dt').click(function () {
        $(this).siblings('dd').toggleClass('myhide');
        //并改变三角的方向,改换类名
        $(this).find('span').toggleClass('topsj');

    });


    //jqueryde oninput怎么用


    <!--search中的隐藏下拉表1 ，点击粉刷匠大作战search hotgame显示列表-->
    //$('.search .hotgame').click(function fn1() {
    //    //$('.search .hotgame-list').show();
    //    $('.search .hotgame-list').show(function () {
    //        $('body').click(function () {
    //            $('.search .hotgame-list').hide(function () {
    //                $('.search .hotgame').click(fn1);
    //                });
    //            });
    //        });
    //    });
    //});

    //研究下jquery中的阻止事件冒泡怎么用
    $('.hotgame')[0].onclick = function (event) {
        $('#serchList')[0].style.display = 'none';
        event = event || window.event;
        $('#hglist')[0].style.display = 'block';
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    };

    <!--大家正在搜列表点击事件-->
    <!--点击input输入框是显示此列表，-->
    $('#inp')[0].onclick = function (event) {
        $('#hglist')[0].style.display = 'none';
        event = event || window.event;
        $('#serchList')[0].style.display = 'block';
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    };

    $('body')[0].onclick = function () {
        $('#hglist')[0].style.display = 'none';
        $('#serchList')[0].style.display = 'none';
    };


    <!--彩虹问答-->
    <!--点击事件 单击问题，显示出answer，且改变body的背景色的透明度-->
    //点击在线帮助显示
    $('.search .help').click(function () {
        $('.search .mask').show(0, function () {
            //点击关闭
            $('.answer .close').click(function () {
                $('.mask').hide();
            });
        });

    });

    ////公告栏轮播开始
    var autoUl= $('#autoplay')[0];

    var autoNum = 0;
    var autotimer = setInterval(noticePlay,1000);
    //鼠标进入清除定时器
    autoUl.onmouseenter= function () {
        clearInterval(autotimer);
    }
    //鼠标移除继续定时器
    autoUl.onmouseleave= function () {
        autotimer = setInterval(noticePlay,1000)
    }

    //封装公告栏自动播放函数
    function noticePlay() {
        autoNum++;
        if (autoNum == 5) {
            autoUl.style.top =  '0px';
            autoNum = 1;
        }
        animateUp(autoUl, -120);
    }
    //向上运动动画封装（公告栏播放用的这个）
    function animateUp(element, target) {
        clearInterval(element.timer);
        element.timer = setInterval(function () {
            var step = target > element.offsetTop ? 10 : -10;
            element.style.top = element.offsetTop + step + 'px';
            if (Math.abs(target - element.offsetTop) <= Math.abs(step)) {
                element.style.top = target + 'px';
                clearInterval(element.timer);
            }
        }, 400)
    };
    //公告栏轮播结束



    //客服大图片部分鼠标进入和移除事件开始
    // 自助申请  致电 现场接待部分
    //1. 鼠标进入隐藏mask, 2. 让图片移动1px , 3.  并让文本部分div的背景色变为红色
    //4.鼠标移开mask显示，背景色还原

    $('#contact li').mouseenter(function () {
        //1.让他下面的mask隐藏，
       $(this).find($('.c-mask')).hide();
        //3.  并让文本部分div的背景色变为红色
        $(this).find('.contact-text').css('background','#c9242b');
        //2.让图片移动4px
        $(this).find('i').css('background-position','-4px 0px').css('background-size','266px 262px');
    }).mouseleave(function () {
        //鼠标移开所有mask显示，背景色还原
        $(this).find($('.c-mask')).show();
        $(this).find('.contact-text').css('background','#a0a0a0');
        //鼠标移开后图片恢复原来的大小和位置
        $(this).find('i').css('background-position', 0);
    });

    //客服大图片部分鼠标进入和移除事件结束

    /*咨询固定框*/
//点击关闭，隐藏整个框

    $('.consult .c-close').click(function () {
        $('.consult').hide();
    });











    //匀速动画封装
    function animate(element, target) {
        clearInterval(element.timer);
        element.timer = setInterval(function () {
            var step = target > element.offsetLeft ? 10 : -10;
            element.style.left = element.offsetLeft + step + 'px';
            if (Math.abs(target - element.offsetLeft) <= Math.abs(step)) {
                element.style.left = target + 'px';
                clearInterval(element.timer);
            }
        }, 10)
    }



//下面是入口函数的括号
});