'use strict';


// fake data for testing
// var recomList = [ {beer: {
// 					name: "A",
// 					ibu: 5,
// 					abv: 3,
// 				  	description: "A is originated from CA",
// 				  	iconUrl: 'https://s3.amazonaws.com/brewerydbapi/beer/1P45iR/upload_upBR4q-large.png',
// 				  	brewery: "A's brewery"
// 				  },
// 				  recommendation: 5},
// 				  {beer: {
// 				  	name: "B",
// 				  	ibu: 4,
// 				  	abv: 3,
// 				  	description: "B is popular back in 1990",
// 				  	iconUrl: 'https://s3.amazonaws.com/brewerydbapi/beer/o1OELJ/upload_OutGJZ-large.png',
// 				  	brewery: "B's brewery"
// 				  },
// 				  recommendation: 4}
// ];

angular.module('beerMeApp')
.controller('RecommendCtrl', function ($scope, $stateParams, $rootScope, $state, recommendationsRequest,$window) {
    
    $scope.recommendationsList = [];

    $scope.userName = localStorage.getItem('userName');
    console.log('the current username is ',$scope.userName);

    recommendationsRequest.getRecommendation($scope.userName)
    	.success(function(data, status, headers, config){
    		 $scope.recommendationsList = data.beers;
    	})
    console.log("This is recommendationList: ", $scope.recommendationsList);

    $scope.clicked = recommendationsRequest.clicked; 
    // $scope.clicked = function(beername){
    // 	$rootScope.beer = beername;
    // 	console.log("This is $rootScope.beer", $rootScope.beer)
    // 	$state.go('beer');
    // }
});
