//Controllers
weatherApp.controller('homeController',['$scope','$location','cityService',function($scope,$location,cityService){
    $scope.city=cityService.city;
    $scope.$watch('city',function(){
        cityService.city=$scope.city;
    });
    $scope.submit=function(){
        $location.path("/!/forecast");
    }
    
}]);
weatherApp.controller('forecastController',['$scope','$resource','$routeParams','cityService',function($scope,$resource,$routeParams,cityService){
     $scope.city=cityService.city;
     $scope.days=$routeParams.days|| '2';
     $scope.appID="9ac7efc3ed7ca55262b125dfc53f2c97";
    
     $scope.weatherAPI= $resource("http://api.openweathermap.org/data/2.5/forecast/daily",{get: {method:"JSONP"}});
     $scope.weatherResult=$scope.weatherAPI.get({APPID:$scope.appID,q:$scope.city,cnt:$scope.days});
     
     $scope.convertToFarenheit=function(degK){
        return Math.round((1.8 * (degK - 273)) + 32);
    }
     $scope.convertToDate=function(dt){
        return new Date(dt * 1000);
    }
    
}]);