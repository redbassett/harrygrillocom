// init smoothScroll
(function(){
	$(function(){
		smoothScroll.init();
	});
})();

// marks currently scrolled-to section active in nav
(function(){
	$(function(){
		nav = $('nav#mainNav')
		nav.activate = function(element) {
			$(this).find('ul.nav a').each(function(){
				if ($(this).attr('href') == '#'+element) {
					$(this).addClass('active');
				} else {
					$(this).removeClass('active');
				}
			})
		}
		$('body div#wrapper div.content section').each(function(){
			$(this).waypoint(function(){
				nav.activate($(this).attr('id'));
			}, {offset: 200})
		});
	});
})();
