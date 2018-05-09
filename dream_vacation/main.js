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

$video.on('ended', function() {
  var thisVideo = $(this).get(0);

  $(this).find('source').attr( 'src', getRandomVideoSrc() );
  video.load();
  video.currentTime = 0;
  video.play();
});