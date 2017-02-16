var snsHeight = $('.sns').height();
var startPos = 0;

$(window).scroll(function() {
  var currentPos = $(this).scrollTop();
  if (currentPos > startPos) {
    if (currentPos - startPos >= 10) {
      $('.sns').css("bottom", "-" + snsHeight + "px");
    }
  } else {
    $('.sns').css("bottom", 0);
  }
  startPos = currentPos;
});


$('.content').click(function() {
  $('#modal-overlay').toggle();
  $('.modal-content').css("display", "flex");
  showText($('.content').index(this));
});

$('#modal-close').click(function() {
  $('#modal-overlay').toggle();
  $('.modal-content').css("display", "none");
  $('.here').html('');
});

function showText(index) {
  if (index === 0) {
    $('.here').append('<p>奈良拓海</p><p>1998年4月28日生まれ<p>栃木市在住</p></p><p>新しいこととエンジニアリングとサッカーと椎名林檎とPerfumeとMrs. GREEN AppleとSuchmosが好き</p><p>すごいサービス作ってます</p><p>仕事をください <a href="https://www.wantedly.com/users/17855841" target="_blank">Wantedly</a></p>');
  } else if (index === 1) {
    $('.here').append('<p>できる順</p><p>Ruby on Rails(Ruby)</p><p>Javascript(Node.js, Vue.js)</p><p>HTML/CSS</p><p>Android(Java)</p><p>openFrameworks(C++)</p><p>English</p>');
  } else if (index === 2) {
    $('.here').append('<p>2016.12.17<br>中高生No.1を決めるクックパッドハッカソン 最優秀賞</p>');
  } else if (index === 3) {
    $('.here').append('<p>マッチングサービス現在開発中断中（ほぼ完成）<br><a href="https://worth-beta.herokuapp.com/" target="_blank">worth-beta.herokuapp.com</a></p><p>アダルトサイト<br><a href="https://av-collection.herokuapp.com/" target="_blank">av-collection.herokuapp.com</a></p><p>高校の裏サイト<br><a href="http://uths.herokuapp.com/" target="_blank">uths.herokuapp.com</a></p><p>現在起業に向けて新規サービス開発中</p>');
  }
}
