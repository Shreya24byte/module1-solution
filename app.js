(function () {
	'use strict';

    angular.module('LunchCheck',[])
    .controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];

	function LunchCheckController ($scope){
		$scope.items = '';
		$scope.message = '';
		
		$scope.display = function() {
			if($scope.items !== '') {
				var list = $scope.items.split(',');
				var num =0;
				for(var i =0; i<list.length; i++){
					if(list[i].trim() !=='')
						num++;
				}
				if(num > 0){
					if(num <=3){
						$scope.message = 'Enjoy!';
					} else {
						$scope.message = 'Too Much!';
					}
				} else { 
                    $scope.message = 'Please enter data first';
                }
            } else { 
                $scope.message = 'Please enter data first';
            }
        }
    }
    
})();