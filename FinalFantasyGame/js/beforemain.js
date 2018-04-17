//页面加载
$(function(){
   //鼠标移入进入官网的图标 变亮
   // $('.enter_itme').mouseenter(function(){
   //     //移入事件
   //     $('.enter_itme img').removeAttr('src').attr('src','../img/bt_lodestoneon.png');
   // }).mouseleave(function(){
   //     $('.enter_itme img').removeAttr('src').attr('src','../img/bt_lodestone.png');
   // });
    //鼠标移入右边图标 变亮
    $('.one img').mouseenter(function(){
        $('.one img:first').css('display','none');
    }).mouseleave(function(){
        $('.one img:first').css('display','block');
    });
    $('.two img').mouseenter(function(){
        $('.two img:first').css('display','none');
    }).mouseleave(function(){
        $('.two img:first').css('display','block');
    });

    //tab栏图片切换功能
    $('.picture_tit li').mouseenter(function(){
       var index = $(this).index();
        $('.picture:eq('+index+')').addClass('show_picture').siblings().removeClass('show_picture');
    });
    //tab栏图片切换功能
    $('.picture_btn li').mouseenter(function(){
       var index = $(this).index();
        $('.pic_two:eq('+index+')').addClass('show_picture').siblings().removeClass('show_picture');
    });
    //滚动 鼠标
    $(window).scroll(function () {
        //判断卷曲的头部> move距离上部的距离则hide
        if ($(document).scrollTop()>= 100){

            $('.free_right').css('transform' ,'translate(470px)' );
            $('.free_right').hide(300);
        } else {

            $('.free_right').fadeIn(300);
            $('.free_right').css('transform' ,'translate(0px)' );

        }
    });

    //手风琴
    $('.books_uu li').mouseenter(function(){
        $(this).css('width','550px').siblings().css('width','300px');
    });
    $('.books_uu').mouseleave(function(){
        $('.books_uu li').css('width','308px');
    });
});