myApp.factory('artistFactory', function( $http) {
    var factory = {};
    factory.getList = function(){ 
    var url = "../artist.json";
   return $http.get(url);
    } 
    return factory;
   });
  