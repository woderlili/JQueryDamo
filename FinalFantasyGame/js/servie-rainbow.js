/**
 * Created by LJ on 2018/3/1.
 */
//��ں���
$(function () {

//�ʺ�ͷ�- С���ǵ���¼�
////���ǰ�ж�����б���ʾ�����أ������������ʾ���ı�����
    $('.service>dl dt').click(function () {
        $(this).siblings('dd').toggleClass('myhide');
        //���ı����ǵķ���,�Ļ�����
        $(this).find('span').toggleClass('topsj');

    });


    //jqueryde oninput��ô��


    <!--search�е�����������1 �������ˢ������սsearch hotgame��ʾ�б�-->
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

    //�о���jquery�е���ֹ�¼�ð����ô��
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

    <!--����������б����¼�-->
    <!--���input���������ʾ���б�-->
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


    <!--�ʺ��ʴ�-->
    <!--����¼� �������⣬��ʾ��answer���Ҹı�body�ı���ɫ��͸����-->
    //������߰�����ʾ
    $('.search .help').click(function () {
        $('.search .mask').show(0, function () {
            //����ر�
            $('.answer .close').click(function () {
                $('.mask').hide();
            });
        });

    });

    ////�������ֲ���ʼ
    var autoUl= $('#autoplay')[0];

    var autoNum = 0;
    var autotimer = setInterval(noticePlay,1000);
    //�����������ʱ��
    autoUl.onmouseenter= function () {
        clearInterval(autotimer);
    }
    //����Ƴ�������ʱ��
    autoUl.onmouseleave= function () {
        autotimer = setInterval(noticePlay,1000)
    }

    //��װ�������Զ����ź���
    function noticePlay() {
        autoNum++;
        if (autoNum == 5) {
            autoUl.style.top =  '0px';
            autoNum = 1;
        }
        animateUp(autoUl, -120);
    }
    //�����˶�������װ�������������õ������
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
    //�������ֲ�����



    //�ͷ���ͼƬ������������Ƴ��¼���ʼ
    // ��������  �µ� �ֳ��Ӵ�����
    //1. ����������mask, 2. ��ͼƬ�ƶ�1px , 3.  �����ı�����div�ı���ɫ��Ϊ��ɫ
    //4.����ƿ�mask��ʾ������ɫ��ԭ

    $('#contact li').mouseenter(function () {
        //1.���������mask���أ�
       $(this).find($('.c-mask')).hide();
        //3.  �����ı�����div�ı���ɫ��Ϊ��ɫ
        $(this).find('.contact-text').css('background','#c9242b');
        //2.��ͼƬ�ƶ�4px
        $(this).find('i').css('background-position','-4px 0px').css('background-size','266px 262px');
    }).mouseleave(function () {
        //����ƿ�����mask��ʾ������ɫ��ԭ
        $(this).find($('.c-mask')).show();
        $(this).find('.contact-text').css('background','#a0a0a0');
        //����ƿ���ͼƬ�ָ�ԭ���Ĵ�С��λ��
        $(this).find('i').css('background-position', 0);
    });

    //�ͷ���ͼƬ������������Ƴ��¼�����

    /*��ѯ�̶���*/
//����رգ�����������

    $('.consult .c-close').click(function () {
        $('.consult').hide();
    });











    //���ٶ�����װ
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



//��������ں���������
});