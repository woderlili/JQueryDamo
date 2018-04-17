$(function () {

    $('#kq').mouseenter(function () {
        $(this).css('background', 'url(../images/JLtu.png) no-repeat 0px -40px');
    }).mouseleave(function () {
        $(this).css('background', '');
    });

    $('#gz').mouseenter(function () {
        $(this).css('background', 'url(../images/JLtu.png) no-repeat -192px -40px');
    }).mouseleave(function () {
        $(this).css('background', '');
    });

    $('#gl').mouseenter(function () {
        $(this).css('background', 'url(../images/JLtu.png) no-repeat -384px -40px');
    }).mouseleave(function () {
        $(this).css('background', '');
    });

    $('#bc').mouseenter(function () {
        $(this).css('background', 'url(../images/JLtu.png) no-repeat -576px -40px');
    }).mouseleave(function () {
        $(this).css('background', '');
    });

    $('#df').mouseenter(function () {
        $(this).css('background', 'url(../images/JLtu.png) no-repeat -768px -40px');
    }).mouseleave(function () {
        $(this).css('background', '');
    });


        $(window).scroll(function () {
            if ($(document).scrollTop() > $('#head').height()) {
                $('#navbox').css({'position': 'fixed', 'top': 0});
                $('#content').css('marginTop', $('#navbox').height());
            } else {
                $('#navbox').css({'position': 'relative', 'top':0});
                $('#content').css('marginTop', 0);
            }
        });




});

//$(function () {
//    var navArr = $('#navbox div');
//    var imgArr = $('#allbox').children();
//    var allbox = $('#allbox');
//    var target = 0;
//    navArr.each(function(index,ele){
//        navArr.click(function () {
//            $(window).scrollTop ( function () {
//            target = $(imgArr[$(this).index()]);
//           allbox.stop().animate({'marginTop':-target.height()*$(this).index()},500);
//            });
//        });
//    });
//});
