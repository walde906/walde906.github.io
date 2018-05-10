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

  if ( key == 'v' ) {
    img = '.video-wrapper-5("style","opacity:1.0; -moz-opacity:1.0; filter:alpha(opacity=100)"';
  } else if ( key == 'b' ) {
    img = 'vid8.mp4'("style","top: 4%;","left: 49%;","position: absolute;","width: 52%;","height: 46%;");
  } else if ( key == 'n' ) {
    img = 'file:///Users/emilwaldron/walde906.github.io/dream_vacation/test.png';
  }  else if ( key == 'm' ) {
    img = 'http://www.pngmart.com/files/1/Mango-Fruit-PNG.png';
  } else if (key == 'c') {
  	img = 'http://www.pngmart.com/files/1/Piano-Clip-Art-PNG.png'
  }

    if ( img ) {
    $('body').append('<img src="' + img + '"style="position: fixed; top: 4%; left: 49%; max-width: 52%;">');
  } else {
    $('body').append('<img src="' + img + '"style="position: fixed; top: 5%; left: -2%; max-width: 52%;">');  }
});


