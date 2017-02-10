//Services
weatherApp.service('cityService',function(){
    this.city="Charlotte,NC";
});

weatherApp.service('weatherService',[ '$resource',function($resource){
    this.GetWeather=function(appID,city,days){
        var weatherAPI= $resource("http://api.openweathermap.org/data/2.5/forecast/daily",{get: {method:"JSONP"}});
        
        return weatherAPI.get({APPID: appID,q: city,cnt: days});  
    };
}]);