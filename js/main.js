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
  $('.here').append('<p>something</p>');
});

$('#modal-close').click(function() {
  $('#modal-overlay').toggle();
  $('.modal-content').css("display", "none");
  $('.here').html('');
});
