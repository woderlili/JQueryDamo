/**
 * Created by Administrator on 2018/3/5 0005.
 */
window.onload = function () {
    // ����1��������Ҳఴť����ǰͼƬ��ʾ��һ��;
    // ����2���������ఴť����ǰͼƬ��ʾ��һ��;(�߼��෴)

    // ����1��������Ҳఴť����ǰͼƬ��ʾ��һ��;
    // ˼·��ԭ��������ֵ�����ƶ�ul������û���ˣ��Զ��������������ֵ;
    var num = 0;
    // ��ȡ���Ԫ��;
    var left = document.getElementById('left');
    var right = document.getElementById('right');
    var ul = document.getElementById('imgs');
    var arr = document.getElementById('arr');
    var ad = document.getElementsByClassName('inner')[0];
    var imgWidth = ad.offsetWidth;
    var box = document.getElementsByClassName('outer')[0];


    // ��������ʾ�ƿ�����;
    box.onmouseover = function () {
        arr.style.display = 'block';
    }
    box.onmouseout = function () {
        arr.style.display = 'none';
    }

    // ����1˼·: ������Ҳ࣬���Զ��������ֵ����, Ȼ���������ֵ�ƶ�ul;
    right.onclick = function () {
        num++;
        // num��ȡֵ��Χ, num==4�����ֵ, ����5��ʱ��Ͳ���ִ����, ���ñ��4;
        if(num == 5) {
            num =4;
        }
        // �ƶ�ul: ul�ƶ��þ������li��Ӧ������ֵ��ͼƬ�Ŀ�;
        var sss = imgWidth * num;
        animate2(ul, -sss);
    }

    // ����2: �������ఴť, ��ǰͼƬ��ʾ��һ��;(�߼��෴)
    left.onclick = function () {
        num--;
        // num��ȡֵ��Χ, num == 0����Сֵ, ����-1��ʱ��Ͳ���ִ����, ���ñ��0��
        if (num == -1) {
            num = 0;
        }
        // �ƶ�ul: ul�ƶ��þ������li��Ӧ������ֵ��ͼƬ�ÿ�;
        var sss = imgWidth * num;
        animate2(ul, -sss);

    }




    // ���ٶ�����װ;
    function animate2(element, target) {
        // Ҫ�ö�ʱ�������嶨ʱ��
        clearInterval(element.timer);
        // �Ѷ�ʱ���󶨵�Ԫ�ص��Զ���������
        element.timer = setInterval(function () {
            // ������
            var step = target > element.offsetLeft ? 10 : -10;
            // ��ֵ
            element.style.left = element.offsetLeft + step + 'px';
            // �߹��˻���
            // ����һ��������ֹͣ��ʱ��;
            if (Math.abs(target-element.offsetLeft) <= Math.abs(step)) {// ��ֵ��ʱ��ҲҪһ��һ����
                // ֱ������Ŀ��λ�ã�
                element.style.left = target+'px';
                clearInterval(element.timer);
            }
        }, 10);
    }

}
