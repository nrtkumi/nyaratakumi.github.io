$('#canvas').get(0).width = $(window).width();
$('#canvas').get(0).height = $(window).height();

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var mouse = {x:0,y:0,x1:0,y1:0,color:"black"};
var draw = false;

canvas.addEventListener("mousemove", function(e) {
  var rect = e.target.getBoundingClientRect();
  ctx.lineWidth = 10;
  ctx.globalAlpha = 100;

  mouseX = e.clientX - rect.left;
  mouseY = e.clientY - rect.top;

  if(draw === true) {
    ctx.beginPath();
    ctx.moveTo(mouseX1,mouseY1);
    ctx.lineTo(mouseX,mouseY);
    ctx.lineCap = "round";
    ctx.stroke();
    mouseX1 = mouseX;
    mouseY1 = mouseY;
  }
});

canvas.addEventListener("mousedown",function(e) {
  draw = true;
  mouseX1 = mouseX;
  mouseY1 = mouseY;
  undoImage = ctx.getImageData(0, 0,canvas.width,canvas.height);
});

canvas.addEventListener("mouseup", function(e){
  draw = false;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});


var finger=new Array;
for(var i=0;i<10;i++){
  finger[i]={
    x:0,y:0,x1:0,y1:0,
    color:"rgb("
    +Math.floor(Math.random()*16)*15+","
    +Math.floor(Math.random()*16)*15+","
    +Math.floor(Math.random()*16)*15
    +")"
  };
}

canvas.addEventListener("touchstart",function(e){
  e.preventDefault();
  var rect = e.target.getBoundingClientRect();
  //ctx.lineWidth = document.getElementById("lineWidth").value;
  ctx.lineWidth = 10;
  //ctx.globalAlpha = document.getElementById("alpha").value/100;
  ctx.globalAlpha = 100
  undoImage = ctx.getImageData(0, 0,canvas.width,canvas.height);
  for(var i=0;i<finger.length;i++){
    finger[i].x1 = e.touches[i].clientX-rect.left;
    finger[i].y1 = e.touches[i].clientY-rect.top;



  }
});

canvas.addEventListener("touchmove",function(e){
  e.preventDefault();
  var rect = e.target.getBoundingClientRect();
  for(var i=0;i<finger.length;i++){
    finger[i].x = e.touches[i].clientX-rect.left;
    finger[i].y = e.touches[i].clientY-rect.top;
    ctx.beginPath();
    ctx.moveTo(finger[i].x1,finger[i].y1);
    ctx.lineTo(finger[i].x,finger[i].y);
    ctx.lineCap="round";
    ctx.stroke();
    finger[i].x1=finger[i].x;
    finger[i].y1=finger[i].y;
  }
});

canvas.addEventListener("touchend", function(e) {
  e.preventDefault();
  var imagedata = ctx.getImageData(0,0,canvas.width,canvas.height);
  console.log(imagedata);
  console.log(canvas.width * canvas.height);
  //var images[];
  //for (var i = 0; i < array.length; i++) {
  //  array[i]
  //}
  var blackAry = Array.prototype.slice.apply(imagedata.data).filter(function (_, index) {
    return (index+1) % 4 === 0;
  });

  var ans = blackAry.filter(function (val) {
    return val !== 0;
  });
  console.log(blackAry);
  console.log(ans.length);
  console.log((ans.length / (canvas.width * canvas.height)) * 100 + "%黒");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  alert((ans.length / (canvas.width * canvas.height)) * 100 + "%黒");
  location.href = 'nyaratakumi.com/blackout';
})
