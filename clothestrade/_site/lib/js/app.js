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
		$scope.inventory[item].count--;
	}
	
	$scope.increaseCount = function(item) {
		$scope.inventory[item].count++;
	}
	
	$scope.totalItems = function() {
		var total = 0;
		var items = $scope.inventory;
		for (var i = 0; i < items.length; i++) {
			total += items[i].count;
		}
		return total;
	}
	
	var Item = function() {
		this.type = "New Category";
		this.count = 0;
	}
	
	$scope.addCategory = function() {
		$scope.inventory.push(new Item());
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