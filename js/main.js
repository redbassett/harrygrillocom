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

// production history
/*(function(){
	$(function(){
		section = $('section#resume section#productionHistory');
		table = section.find('table.data-display');
		sort = section.find('ul.sort');

		// load JSON
		(function(){
			$.getJSON('../production-history.json', function(source){

			});
		})();

		// bind actions to display links, do sort
		/*(function(){
			sort.find('a[data-display="ldesign"]').click(function(){

			})
		})();
	});
})();*/
