/**
 * Created by caipf on 2017/6/26.
 */

let app=angular.module('app',['ngRoute']);
let AppController=function ($scope) {
    $scope.test="hello world";
}
app.controller("AppController",AppController);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/index",{
            templateUrl:"/ws_platform_angular/pages/navPage/flow_index.html"
        })
        .when("/mine",{
            templateUrl:"/ws_platform_angular/pages/navPage/mine_index.html"
        })
        .when("/project",{
            templateUrl:"/ws_platform_angular/pages/navPage/project_index.html"
        })
        .when("/createproject",{
            templateUrl:"/ws_platform_angular/pages/navPage/createproject.html"
        })
        .when("/managepanel",{
            templateUrl:"/ws_platform_angular/pages/navPage/managepanel.html"
        })
        .otherwise({
           redirectTo:"/index"
        });
});