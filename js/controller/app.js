/**
 * Created by caipf on 2017/6/26.
 */

let app=angular.module('app',['ngRoute']);
let AppController=function ($scope) {
    $scope.test="hello world";
}
let FlowController=function ($scope) {
    $scope.navDropItem=[{
        "title":"全部"
    },{
        "title":"产品类",
        "items":["A","B","C"]
    },{
        "title":"研发类",
        "items":["Aa","Bb","Cb"]
    },{
        "title":"行政类",
        "items":["1111","2222","3333"]
    }];
}
app.controller("AppController",AppController);
app.controller("FlowController",FlowController);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/index",{
            templateUrl:"/ws_platform_angular/pages/navPage/flow_index.html",
            controller:'FlowController'
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