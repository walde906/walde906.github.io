var videoSources = [
  'vid1.mp4',
  'vid2.mp4',
  'vid3.mp4',
  'vid4.mp4',
  'vid5.mp4',
  'vid6.mp4',
  'vid7.mp4',
  'vid8.mp4',
  'vid9.mp4',
  'vid10.mp4',
  'vid11.mp4',
  'vid12.mp4',
  'vid13.mp4',
  'vid14.mp4',
  'vid15.mp4',
  'vid16.mp4',
  'vid17.mp4'
];

var getRandomVideoSrc = function (){
  return videoSources[ Math.floor( Math.random() * videoSources.length ) ];
};

$('.video-wrapper-1 video source').attr( 'src', getRandomVideoSrc() );

var video = $('.video-wrapper-1 video');

video.on('ended', function() {
  $('.video-wrapper-1 video source').attr( 'src', getRandomVideoSrc() );
});

$(function() {
  $('video').each(function() {
    var video = $(this).get(0);
    video.play();
  });
});



$(document).on('keypress', function(e) {
  var key = e.key;
  var img;
  var text;

  console.log('keypress:', key);

  if ( key == 'a' ) {
    img = 'https://walde906.github.io/dream_vacation/assets/eight.png';
  } else if ( key == 'b' ) {
    img = 'https://walde906.github.io/dream_vacation/assets/eighteen.png';
  } else if ( key == 'c' ) {
    img = 'https://walde906.github.io/dream_vacation/assets/eleven.png';
  }  else if ( key == 'd' ) {
    img = 'https://walde906.github.io/dream_vacation/assets/fifteen.png';
  }  else if ( key == 'e' ) {
    img = 'https://walde906.github.io/dream_vacation/assets/five.png';
  }  else if ( key == 'f' ) {
    img = 'https://walde906.github.io/dream_vacation/assets/four.png';
  }  else if ( key == 'g' ) {
    img = 'https://walde906.github.io/dream_vacation/assets/fourteen.png';
  }  else if ( key == 'h' ) {
    img = 'https://walde906.github.io/dream_vacation/assets/nine.png';
  }  else if ( key == 'i' ) {
    img = 'https://walde906.github.io/dream_vacation/assets/nineteen.png';
  }  else if ( key == 'j' ) {
    img = 'https://walde906.github.io/dream_vacation/assets/one.png';
  }  else if ( key == 'k' ) {
    img = 'https://walde906.github.io/dream_vacation/assets/seven.png';
  }  else if ( key == 'l' ) {
    img = 'https://walde906.github.io/dream_vacation/assets/seventeen.png';
  }  else if ( key == 'm' ) {
    img = 'https://walde906.github.io/dream_vacation/assets/six.png';
  }  else if ( key == 'n' ) {
    img = 'https://walde906.github.io/dream_vacation/assets/sixteen.png';
  }  else if ( key == 'o' ) {
    img = 'https://walde906.github.io/dream_vacation/assets/ten.png';
  }  else if ( key == 'p' ) {
    img = 'https://walde906.github.io/dream_vacation/assets/thirteen.png';
  }  else if ( key == 'q' ) {
    img = 'https://walde906.github.io/dream_vacation/assets/three.png';
  }  else if ( key == 'r' ) {
    img = 'https://walde906.github.io/dream_vacation/assets/twelve.png';
  }  else if ( key == 's' ) {
    img = 'https://walde906.github.io/dream_vacation/assets/twenty.png';
  }  else if ( key == 't' ) {
    img = 'https://walde906.github.io/dream_vacation/assets/twentyfive.png';
  }  else if ( key == 'u' ) {
    img = 'https://walde906.github.io/dream_vacation/assets/twentyfour.png';
  }  else if ( key == 'v' ) {
    img = 'https://walde906.github.io/dream_vacation/assets/twentyone.png';
  }  else if ( key == 'w' ) {
    img = 'https://walde906.github.io/dream_vacation/assets/twentysix.png';
  }  else if ( key == 'x' ) {
    img = 'https://walde906.github.io/dream_vacation/assets/twentythree.png';
  }  else if ( key == 'y' ) {
    img = 'https://walde906.github.io/dream_vacation/assets/twentytwo.png';
  }  else if ( key == 'z' ) {
    img = 'https://walde906.github.io/dream_vacation/assets/two.png';
  }



  if ( img ) {
    $('body').append('<img src="' + img + '" style="position: fixed; top: '+ Math.random() * 100 + '%; left: ' + Math.random() * 100 + '%; transform: translate(-50%, -50%); max-width: 300px;">');
  } else {
    $('body').append('<h2 style="position: fixed; top: '+ Math.random() * 100 + '%; left: ' + Math.random() * 100 + '%; transform: translate(-50%, -50%); font-size: ' + Math.random() * 200 + 'px;">' + key + '</h2>');
  }
});

