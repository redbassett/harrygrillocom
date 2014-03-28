// init smoothScroll
(function(){
	$(function(){
		smoothScroll.init({
			offset: 128+$('nav#mainNav').height(),
			updateURL: true
		});
	});
})();

// marks currently scrolled-to section active in nav
/*(function(){
	$(function(){
		nav = $('nav#mainNav')
		nav.activate = function(element) {
			$(this).find('ul.nav a').each(function(){
				if ($(this).attr('href').indexOf('#'+element) != -1) {
					$(this).addClass('active');
				} else {
					$(this).removeClass('active');
				}
			})
		}
		$('body div#wrapper div.content section').each(function(){
			switch($(this).attr('id')) {
				default:
					offset = 0;
					break;
				case 'ldesign':
					offset = 158+$('nav#mainNav').height();
					break;
			}
			$(this).waypoint(function(){
				nav.activate($(this).attr('id'));
			}, {offset: offset})
		});
	});
})();*/