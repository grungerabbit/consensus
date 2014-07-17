(function($){
	var welcome = {   
		'init' : function () {
			var main = welcome.mainMethods();
			main.setup();
		},
		'mainMethods' : function () {
			var development = true;
			
			function preventEscape() {
				if (!development) {
					$(window).on('beforeunload', function(){
						return '!!!';
					});
				}
			}
			          
			return {
				setup: function () {
					preventEscape();
				}               
			};
		}         
	};
	$(document).ready( function() {
		welcome.init();
	});
}(jQuery));