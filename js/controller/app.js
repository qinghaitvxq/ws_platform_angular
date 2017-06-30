/**
 * Created by caipf on 2017/6/26.
 */

let app=angular.module('app',['ui.router','ui.grid']);
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
    $scope.myData=[{
        "tCategory":"hello1",
        "sCategory":"hello2",
        "name":"测试",
        "mtname":"璐璐",
        "utime":"2017-06-28"
    },{
        "tCategory":"test1",
        "sCategory":"test2",
        "name":"白白",
        "mtname":"冬季",
        "utime":"2017-06-29"
    }];

}
app.controller("AppController",AppController);
app.controller("FlowController",FlowController);

app.config(function ($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise("/index");
    $stateProvider
        .state("index",{
            url:"/index",
            templateUrl:"/ws_platform_angular/pages/navPage/flow_index.html",
            controller:'FlowController'
        })
        .state("mine",{
            url:"/mine",
            templateUrl:"/ws_platform_angular/pages/navPage/mine_index.html"
        })
        .state("project",{
            url:"/project",
            templateUrl:"/ws_platform_angular/pages/navPage/project_index.html"
        })
        .state("createproject",{
            url:"/createproject",
            templateUrl:"/ws_platform_angular/pages/navPage/createproject.html"
        })
        .state("managepanel",{
            url:"/managepanel",
            templateUrl:"/ws_platform_angular/pages/navPage/managepanel.html"
        })
        .state("flow_detail",{
            url:"/flow_detail",
            templateUrl:"/ws_platform_angular/pages/flow_detail.html"
        });
});