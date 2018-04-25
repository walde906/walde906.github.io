
$("#text").click(function () {
	$("p").toggle();
});

$("#bird").click(function(){
	$("#bird").animate({right: "300px"},2000);
});

$(document).on('keypress', function(e) {
  var key = e.key;
  var img;
  var text;

  console.log('keypress:', key);

  if ( key == 'v' ) {
    img = 'http://www.pngmart.com/files/1/Camel-PNG-Image.png';
  } else if ( key == 'b' ) {
    img = 'http://www.pngmart.com/files/3/Cheetah-Transparent-PNG.png';
  } else if ( key == 'n' ) {
    img = 'http://www.pngmart.com/files/2/Plum-PNG-Image.png';
  }  else if ( key == 'm' ) {
    img = 'http://www.pngmart.com/files/1/Mango-Fruit-PNG.png';
  } else if (key == 'c') {
  	img = 'http://www.pngmart.com/files/1/Piano-Clip-Art-PNG.png'
  }

  if ( img ) {
    $('body').append('<img src="' + img + '" style="position: fixed; top: '+ Math.random() * 100 + '%; left: ' + Math.random() * 100 + '%; transform: translate(-50%, -50%); max-width: 300px;">');
  } else {
    $('body').append('<h2 style="position: fixed; top: '+ Math.random() * 100 + '%; left: ' + Math.random() * 100 + '%; transform: translate(-50%, -50%); font-size: ' + Math.random() * 200 + 'px;">' + key + '</h2>');
  }
});

$(document).on('click', function(event) {
  console.log(event);


  event.preventDefault();


  var $clickTarget = $(event.target);

  $clickTarget.remove();
});

var documentHeight = $(document).height();
var $elements = $('.sidebar > *, .page-content > *');

$(window).on('scroll', function() {
  var scrollTop = $(this).scrollTop();
  var scaleFactor = ((scrollTop / documentHeight * 4) % 1.5) + 0.2;

  console.log('scaleFactor', scaleFactor);

  $elements.css({ transform: 'scale(' + scaleFactor + ')' });
});
