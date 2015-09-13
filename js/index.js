$(document).ready(function(){
	
	$('ul.classes li').click(function(){
		var tab_id = $(this).attr('desc');

		$('ul.classes li').removeClass('current');
		$('.expanded_content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

});

var runEverySecond = function(){
  $('p').find('img').attr('width', '0px');
  $('a').css('padding', '0px');

  console.debug('Hello Word has ' + $('p').length + ' paragraphs');
};

$(document).ready(function() {
    setInterval(runEverySecond,1000);
});