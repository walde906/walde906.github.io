var videoSources = [
  'video1.mp4',
  'video2.mp4',
  'video3.mp4',
  'video4.mp4',
  'video4.mp7',
  'video4.mp8',
  'video4.mp9',
  'video4.mp10',
  'video4.mp11',
  'video4.mp12',
  'video4.mp13',
  'video4.mp14'
];

var getRandomVideoSrc = function (){
  return videoSources[ Math.floor( Math.random() * videoSources.length ) ];
};

$('.video-wrapper-1 video source').attr( 'src', getRandomVideoSrc() );

var video = $('.video-wrapper-1 video');

video.on('ended', function() {
  $('.video-wrapper-1 video source').attr( 'src', getRandomVideoSrc() );
});
