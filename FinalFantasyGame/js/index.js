//������
$(function () {


    //ҳ����ؿ�ʼ����ʱ�ĵ��붯��
    $('.center_img .up_banner').fadeIn(1000);
    $('.banner_center .center_font').fadeIn(4000);
    $('.banner_center .bottom_font_top').fadeIn(6000);
    $('.banner_center .bottom_font_bottom').fadeIn(6000);

    $('.bg_one .one_number').fadeIn(1000);
    $('.bg_one .one_title').fadeIn(1000);

    $('.bottom_two .two_left').fadeIn(2000);
    $('.bottom_two .two_midleft').fadeIn(4000);
    $('.bottom_two .two_midright').fadeIn(2000);
    $('.bottom_two .two_right').fadeIn(4000);


    // ��������Ч��
    $('.nav_bottom li').mouseenter(function () {
        $(this).css('marginTop', '0px').siblings('li').css('marginTop', '-45px');
    }).mouseleave(function () {
        $('.nav_bottom li').css('marginTop', '-45px');
    });

    //�ײ�������������Ƴ�Ч��
    $('.foot_nav li').mouseenter(function () {
       $(this).css('marginTop', '2px').siblings('li').css('marginTop', '-43px');
    }).mouseleave(function () {
        $('.foot_nav li').css('marginTop', '-43px');
    });



    //�ײ������̶�������Ч��
    $(window).scroll(function () {
        if ($(document).scrollTop() >= 300) {
            $('.foot_nav').css('bottom',$(document).scrollTop()-300)
        }else{
            $('.foot_nav').css('bottom',0);
        }
    });

    //��һҳ��߶���
    var posY1 = 0;
    var posY2 = 0;
    var posY3 = 0;
    setInterval(function () {
        if (posY1 <= -900) {
            posY1 = 0;
        }


        if (posY2 <= -900) {
            posY2 = 0;
        }


        if (posY3 <= -1200) {
            posY3 = 0;
        }
        posY1 -= 1;
        posY2 -= 2;
        posY3 -= 3;
        $('#left_animate1').css({'backgroundPosition':'0' + posY1 + 'px'});
        $('#left_animate2').css({'backgroundPosition':'0' + posY2 + 'px'});
        $('#left_animate3').css({'backgroundPosition':'0' + posY3 + 'px'});
    },50);



//��һҳ�ڶ���������Ч��
    $('.bottom_two>div').mouseenter(function () {
        $(this).css('opacity','1').siblings('div').css('opacity','0.5');
    }).mouseleave(function () {
        $('.bottom_two>div').css('opacity','0.5');
    });
    $('.bottom_two>div img').mouseenter(function () {
        $(this).css('marginTop','0px');
    }).mouseleave(function () {
        $('.bottom_two>div img').css('marginTop', '-42px');
    });



    //�л�
    $('#come-0').click(function () {
        $('#hide-2').hide();
        $('#hide-1').fadeIn(2000);
    });
    $('#come-1').click(function () {
        $('#hide-1').hide()
        $('#hide-2').show(1000);
    });


});







