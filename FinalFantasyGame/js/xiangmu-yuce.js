/**
 * Created by Administrator on 2018/3/2.
 */



(function () {
    //var ul=document.getElementsByClassName('ul1');
    //var liArr=ul.children;
    //for (var i=0;i<liArr.length;i++) {
    //    liArr[i].onclick=function () {
    //        liArr[i].backgroundColor='white';
    //    };
    //};

  $(function () {
      $('#li1').click(function () {
          $(this).css('backgroundColor','white');
      });
  });
})();