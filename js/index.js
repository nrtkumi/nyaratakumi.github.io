/* Loading effect */
function loaderSpinner() {
    $(window).load(function() {
        var loader = $('.loader');
var wHeight = $(window).height();
var wWidth = $(window).width();
var i = 0;
loader.css({
    top: wHeight / 2 - 2.5,
    left: wWidth / 2 - 200
 })

  do{
    loader.animate({
      width: i
    },10)
    i+=3;
  } while(i <= 400)
  if(i === 402){
    loader.animate({
      left: 0,
      width: '100%'
    })
    loader.animate({
      top: '0',
      height: '100vh'
    })
  }

      setTimeout(function(){
        $('.content').fadeIn("slow");
        (loader).fadeOut("fast");
        /*Set time in milisec */
      },3500);
    });

}

loaderSpinner();


/* Shall */
var myString = "Hello! My name is Takumi Nara. Please call me Nyara. " +
  "I made this page. It is witten about me. All of me it is written here. " +
  "I want to be an engineer. Becouse I love programming. I am studying to become an engineer. " +
  "";

var myArray = myString.split(""),
  loopTimer,
  setToday;

setToday = document.getElementById('newTime').outerHTML = getFormattedDate();

function frameLooper() {
  if (myArray.length > 0) {
    document.getElementById('myTypingText').innerHTML += myArray.shift();
  } else {
    clearTimeout(loopTimer);
  }
  loopTimer = setTimeout('frameLooper()', 70);
}

frameLooper();

function getFormattedDate() {
  var date = new Date();

  var str = date.getFullYear() + "-" +
    (date.getMonth() + 1) + "-" +
    date.getDate() + " " +
    date.getHours() + ":" +
    date.getMinutes() + ":" +
    date.getSeconds();

  return str;
}


/* jquery inview */
$('#title').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
  var title = $(this);

  setTimeout(function(){
    title.css('visibility', 'visible');
    title.addClass('fadeInUp');
  },500);
});

$('#shell').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
  var shell = $(this);

    shell.css('visibility', 'visible');
    shell.addClass('bounceInLeft');
});

$('#one').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
  var one = $(this);
  var two = $('#two');
  var three = $('#three');
  var four = $('#four');
  var five = $('#five');

  setTimeout(function(){
    one.addClass('chart');
    $(function() {
      $('.chart').easyPieChart({
        trackColor: '#333',
        scaleColor: false,
        lineWidth: 10,
        lineCap: 'round',
        barColor: '#e6f035',
        size: 150,
        animate: 1500
      });
    });
  },1000);

  setTimeout(function(){
    two.addClass('chart');
    $(function() {
      $('.chart').easyPieChart({
        trackColor: '#333',
        scaleColor: false,
        lineWidth: 10,
        lineCap: 'round',
        barColor: '#e6f035',
        size: 150,
        animate: 1500
      });
    });
  },2000);

  setTimeout(function(){
    three.addClass('chart');
    $(function() {
      $('.chart').easyPieChart({
        trackColor: '#333',
        scaleColor: false,
        lineWidth: 10,
        lineCap: 'round',
        barColor: '#e6f035',
        size: 150,
        animate: 1500
      });
    });
  },3000);

  setTimeout(function(){
    four.addClass('chart');
    $(function() {
      $('.chart').easyPieChart({
        trackColor: '#333',
        scaleColor: false,
        lineWidth: 10,
        lineCap: 'round',
        barColor: '#e6f035',
        size: 150,
        animate: 1500
      });
    });
  },4000);

  setTimeout(function(){
    five.addClass('chart');
    $(function() {
      $('.chart').easyPieChart({
        trackColor: '#333',
        scaleColor: false,
        lineWidth: 10,
        lineCap: 'round',
        barColor: '#e6f035',
        size: 150,
        animate: 1500
      });
    });
  },5000);
});
