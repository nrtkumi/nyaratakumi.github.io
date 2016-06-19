$('#title').t('<del>Welcome!</del><del>I am superman!</del>ny<del>ea</del>ara terminal', {speed:50,speed_vary:true,caret:true});

$('#name').on('inview', function() {
  $(this).t('# My name is Takumi Nara.', {speed:50,speed_vary:true,caret:true});
});

$('#birthday').on('inview', function() {
  $(this).t('# Birthday is April 28, 1998.', {speed:50,speed_vary:true,caret:true});
});

$('#school').on('inview', function() {
  $(this).t('# I live in Tochigi Prefecture.', {speed:50,speed_vary:true,caret:true});
});


$('#tl').on('inview', function() {
  $(this).t('# Member of Tech Logics.', {speed:50,speed_vary:true,caret:true});
});

$('#hobby').on('inview', function() {
  $(this).t('# I love programming and soccer!', {speed:50,speed_vary:true,caret:true});
});

$('ul').on('inview', function() {
  $(this).t('<li>Ruby(Rails) => Business level(lie)</li><li>JavaScript => So-so</li><li>Java(Android) => Beginner</li><li>HTML/CSS => So-so</li><li>C => Hmm...</li><li>Japanese => Native level</li><li>English => YEAHHHHHHH!!!!!!!</li>', {speed:50,speed_vary:true,caret:true});
});

/*
  $('.test').t({
    speed:75,          // タイピングのスピードを指定します。
    speed_vary:true,  // 「true」にすると人間が入力しているかのように文字ごとのスピードが変わります。
    delay:false,       // 開始時間を指定します。
    mistype:false,     // 文字の打ち間違いをする確率を指定します。
    caret:true,        // 「true」にするとカーソルを非表示する事ができます。
    blink:false,       // 「true」にするとカーソルを点滅させる事ができます。
    tag:'span',        // テキストを囲むタグを指定します。
    repeat:false       // 何回リピートするか指定します。「true」を指定すると、無限にリピートします。
  });

*/
