$(function() {
  $('#welcome').slideDown(1500);
  $('#head').slideDown(2000);
  $('#please').fadeIn(2000);

  $('.set').click(function(){
  // 押されたタブが何番目か取得
  var index = $(this).index();
  //「.step-list」全体から「active」クラスを取り除き
  $('.set').removeClass('active');
  //押されたものだけに「active」クラスを与え
  $(this).addClass('active');
  //「.explain」全体から「active」クラスを取り除き
  $('.explain').removeClass('active');
  //押された「.step-list」と同じインデックス番号をもつ「.explain」だけに「active」クラスを与える
  $('.explain').eq(index).addClass('active');
  });
});
