app.config(($routeProvider,$locationProvider,USERS)=>{
    $locationProvider.hashPrefix(' ');
    $routeProvider.when(USERS,{
        templateUrl:'/views/users.html'
    }).otherwise({template:'Invalid URL'})
})