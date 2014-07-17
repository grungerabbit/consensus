function CT($scope) {
	$scope.test = "AA"
}



document.addEventListener('DOMContentLoaded', function(){
	function preventEscape() {
		if (!development) {
			$(window).on('beforeunload', function(){
				return '!!!';
			});
		}
	}
	
	var development = true;
	preventEscape();
});