function CT($scope) {
	$scope.inventory = [
		{
			"type": "Shirts/tops",
			"count": 0
		},
		{
			"type": "Button downs",
			"count": 0
		},
		{
			"type": "Sweaters",
			"count": 0
		},
		{
			"type": "Vests",
			"count": 0
		},
		{
			"type": "Jackets",
			"count": 0
		},
		{
			"type": "Pants",
			"count": 0
		},
		{
			"type": "Skirts",
			"count": 0
		},
		{
			"type": "Suits",
			"count": 0
		},
		{
			"type": "Dresses",
			"count": 0
		},
		{
			"type": "Shoes",
			"count": 0
		},
		{
			"type": "Hats",
			"count": 0
		},
		{
			"type": "Bags",
			"count": 0
		},
		{
			"type": "Belts",
			"count": 0
		},
		{
			"type": "Gloves",
			"count": 0
		},
		{
			"type": "Scarves",
			"count": 0
		},
		{
			"type": "Misc",
			"count": 0
		},
	];
	
	$scope.decreaseCount = function(item) {
		console.log(item)
	}
	
	$scope.increaseCount = function(item) {
		console.log(item)
	}
	
	
	
	
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