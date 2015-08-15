$(function() {
  $('#welcome').slideDown(1500);
  $('#head').slideDown(2000);

  $('.set').click(function(){
  var index = $(this).index();
  $('.set').removeClass('active');
  $(this).addClass('active');
  $('.explain').removeClass('active');
  $('.explain').eq(index).addClass('active');
  });
});
