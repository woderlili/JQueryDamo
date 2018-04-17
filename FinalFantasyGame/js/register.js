/**
 *
 * Created by XiaoHuang on 2018/3/4.
 */
//页面加载
$(function () {
    var rel = [
        {
            //手机注册
            'name': 'phone',
            'tilt': '请输入11位数字',
            'nul': '内容不能为空',
            'wrong': '输入错误，请重试!',
            're': /^((13[0-9])|(15[^4,\D])|(18[0-9]))\d{8}$/
        },
        {
            'name': 'code',
            'tilt': '请输入验证码',
            'nul': '内容不能为空',
            'wrong': '输入错误，请重试!',
        },
        {
            'name': 'pwd',
            'tilt': '请输入6~30位字母或数字',
            'nul': '内容不能为空',
            'wrong': '输入错误，请重试!',
            're': /^\w{6,30}$/
        },
        {
            'name': 'name',
            'tilt': '请输入2~5个汉字',
            'nul': '内容不能为空',
            'wrong': '输入错误，请重试!',
            're': /^[[\u4e00-\u9fa5]{2,5}$/
        },
        {
            //邮箱注册
            'name': 'email',
            'tilt': '请输入正确的邮箱地址',
            'nul': '内容不能为空',
            'wrong': '输入错误，请重试!',
            're': /^\w*@[0-9a-z]{2,6}(\.\w{1,4}){2,3}$/
        },
        {
            'name': 'pwd2',
            'tilt': '请输入6~30位字母或数字',
            'nul': '内容不能为空',
            'wrong': '输入错误，请重试!',
            're': /^\w{6,30}$/
        },
        {
            'name': 'name2',
            'tilt': '请输入2~5个汉字',
            'nul': '内容不能为空',
            'wrong': '输入错误，请重试!',
            're': /^[[\u4e00-\u9fa5]{2,5}$/
        },

        {
            //个性注册
            'name': 'person',
            'tilt': '请输入4~16数字或字母个性账号',
            'nul': '内容不能为空',
            'wrong': '输入错误，请重试!',
            're': /^[0-9a-zA-Z]{4,16}]$/
        },
        {
            'name': 'pwd3',
            'tilt': '请输入6~30位字母或数字',
            'nul': '内容不能为空',
            'wrong': '输入错误，请重试!',
            're': /^\w{6,30}$/
        },
        {
            'name': 'name3',
            'tilt': '请输入2~5个汉字',
            'nul': '内容不能为空',
            'wrong': '输入错误，请重试!',
            're': /^[[\u4e00-\u9fa5]{2,5}$/
        },
        {
            'name': 'email2',
            'tilt': '请输入正确的邮箱地址',
            'nul': '内容不能为空',
            'wrong': '输入错误，请重试!',
            're': /^\w*@[0-9a-z]{2,6}(\.\w{1,4}){2,3}$/
        },
    ];

    var code_number = ''
    //获取tab的标题 实现点击当前li显示对应内容区块
    $('#nav>li').click(function () {
        $(this).addClass('cur').siblings('li').removeClass('cur');
        //获取当前li的索引值 根据索引值显示对应内容区块
        var index = $(this).index();
        $('.info:eq(' + index + ')').addClass('active').siblings().removeClass('active');
    });
    //点击免费获取验证码 弹出验证码
    $('.code').click(function () {
        var num1 = parseInt(Math.random() * 9);
        var num2 = parseInt(Math.random() * 9);
        var num3 = parseInt(Math.random() * 9);
        var num4 = parseInt(Math.random() * 9);
        code_number = num1 + '' + num2 + '' + num3 + '' + num4;
        alert(code_number);
    });
    //点击小眼睛可以切换加密或不加密
    $('.item').click(function () {
        if ($(this).hasClass('act')) {
            $(this).removeClass('act');
            $('.pwd input').removeAttr('type');
            $('.pwd input').attr('type', 'password');
        } else {
            $(this).addClass('act');
            $('.pwd input').removeAttr('type');
            $('.pwd input').attr('type', 'text');
        }
        //console.log($('.pwd input').attr('type'));
    });
    //获取焦点
    $('.regist input').each(function (index, ele) {
        var num = index;
        $(ele).focus(function () {
            var ind = rel[num].tilt;
            console.log(ind);
            $(this).next('span').text('' + ind + '');
        });
        //失去焦点
        $(ele).blur(function () {
            var str = $(this).val();
            ////验证验证码
            if(num === 1){
                if($(this).val() == code_number){
                    $(this).next('span').text('').removeClass('current');

                }else {
                    $(this).next('span').text('' + rel[1].wrong + '').addClass('current');
                }
                 return;
                    }
            //判断输入框是否为空
            if (str == '') {
                $(this).next('span').text('内容不能为空！').addClass('current');
                return;
            }
            //验证输入框内容是否正确
            if (rel[num].re.test(str)) {
                $(this).next('span').text('').removeClass('current');
            } else {
                $(this).next('span').text('' + rel[num].wrong + '').addClass('current');
            }
        });

    });

});