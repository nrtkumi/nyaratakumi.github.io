$(function() {

  $('#particles').particleground({
    dotColor: '#00ffba', //ドットの色
    lineColor: '#00ff12', //線の色
    particleRadius: 5, //ドットの大きさ
    minSpeedX: 0.1,
    density: 7000,
    parallax: false
  });
/*
  $('a[href^=#about]').click(function() {
      var speed = 400;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });

  $('a[href^=#history]').click(function() {
      var speed = 400;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });

   $('a[href^=#skill]').click(function() {
       var speed = 400;
       var href= $(this).attr("href");
       var target = $(href == "#" || href == "" ? 'html' : href);
       var position = target.offset().top;
       $('body,html').animate({scrollTop:position}, speed, 'swing');
       return false;
    });

    $('a[href^=#made]').click(function() {
        var speed = 400;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        return false;
     });

     $('a[href^=#contact]').click(function() {
         var speed = 400;
         var href= $(this).attr("href");
         var target = $(href == "#" || href == "" ? 'html' : href);
         var position = target.offset().top;
         $('body,html').animate({scrollTop:position}, speed, 'swing');
         return false;
      });*/
});
