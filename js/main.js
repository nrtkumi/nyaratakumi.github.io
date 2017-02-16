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
    $('.here').append('<p>奈良拓海</p><p>1998年4月28日生まれ</p><p>すごいサービス作ってます</p><p>仕事をください</p>');
  } else if (index === 1) {
    $('.here').append('<p>できる順</p><p>Ruby on Rails(Ruby)</p><p>Javascript(Node.js, Vue.js)</p><p>HTML/CSS</p><p>Android(Java)</p><p>openFrameworks(C++)</p><p>English</p>');
  } else if (index === 2) {
    $('.here').append('<p>2016.12.17<br>中高生No.1を決めるクックパッドハッカソン 最優秀賞</p>');
  }
}
