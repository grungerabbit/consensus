angular.module('CT', ['ngTouch']).controller("calc", calc);

function calc($scope, $window) {
	$scope.inventory = [
		{
			"type": "Shirts/tops",
			"count": 0,
			"misc": false
		},
		{
			"type": "Button downs",
			"count": 0,
			"misc": false
		},
		{
			"type": "Sweaters",
			"count": 0,
			"misc": false
		},
		{
			"type": "Vests",
			"count": 0,
			"misc": true
		},
		{
			"type": "Jackets",
			"count": 0,
			"misc": false
		},
		{
			"type": "Pants",
			"count": 0,
			"misc": false
		},
		{
			"type": "Skirts",
			"count": 0,
			"misc": false
		},
		{
			"type": "Suits",
			"count": 0,
			"misc": true
		},
		{
			"type": "Dresses",
			"count": 0,
			"misc": false
		},
		{
			"type": "Shoes",
			"count": 0,
			"misc": false
		},
		{
			"type": "Hats",
			"count": 0,
			"misc": true
		},
		{
			"type": "Bags",
			"count": 0,
			"misc": true
		},
		{
			"type": "Belts",
			"count": 0,
			"misc": true
		},
		{
			"type": "Gloves",
			"count": 0,
			"misc": true
		},
		{
			"type": "Scarves",
			"count": 0,
			"misc": true
		}
	];
	
	$scope.decreaseCount = function(item) {
		$scope.inventory[item].count--;
	}
	
	$scope.increaseCount = function(item) {
		$scope.inventory[item].count++;
	}
	
	$scope.misc = false;
	
	$scope.totalItems = function() {
		var total = 0;
		var items = $scope.inventory;
		for (var i = 0; i < items.length; i++) {
			total += parseInt(items[i].count);
		}
		return parseInt(total);
	}
	
	var Item = function() {
		this.type = "New Category";
		this.count = 0;
		this.misc = true;
	}
	
	$scope.addCategory = function() {
		$scope.inventory.push(new Item());
	}
	
	$scope.toggleMisc = function() {
		$scope.misc = !$scope.misc;
	}
	
	$scope.generateItemBreakdown = function() {
		var items = $scope.inventory;
		
		var email = [];
		
		function assembleMailto(item) {
			var type = item.type;
			var count = item.count;
			
			var line = type + ": " + count;
			
			stripSpaces(line);
		}
		
		function stripSpaces(line) {
			var newLine = line.replace(/\s/g, "%20") + "%0D%0A";
			email.push(newLine);
		}
		
		for (var k = 0; k < items.length; k++) {
			assembleMailto(items[k])
		}
		
		email.push(stripSpaces("-----"));
		email.push(stripSpaces("Total: " + $scope.totalItems() + " items donated"));

		$window.location = "mailto:yesiwantthisthing@gmail.com?subject=Clothestrade%202014&body=" + email.join("");
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