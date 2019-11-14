'use strict';

//- ";"理由は例えば、チェインできるように保険でつけとく
//- チェインは $(".test").fadeToggle().addClass()とか

;(function ($) {

	$.fn.myplugin = function(config) {

		if(!config) {
			config = {};
		};

		const target = config.target || '.myplugin-target';
		const addClass = config.addClass || 'on';
		const fade = config.fade || false;

		this.on('click', function() {
			$(target).toggleClass(addClass);
			if(fade) {
				$(target).fadeToggle(1000);
			}
		});

		return this;

	}

})(jQuery);
