myApp.config(function ($stateProvider, $urlRouterProvider) {
     $urlRouterProvider.otherwise( "/");
       $stateProvider
            .state('Home', {
                url: "/",
                templateUrl: "partial/partial1.html"
            })
            .state('Artist', {
                url:"/Artist",
              templateUrl: "partial/partial2.html",  
              controller: "artistCtrl"
            })
             .state("Gallary", {
              url:"/Gallary",
                 templateUrl: "partial/partial3.html"
             })
             .state("Login", {
             url:"/Login",
                 templateUrl: "partial/partial4.html"
                
             });
    });
   