/**
 * Created by caipf on 2017/6/26.
 */
(function () {
    var app=angular.module("app");
    app.directive("navTabs",function () {
        return{
            restrict:'E',
            templateUrl:"../template/navTabs.html",
            replace:true
        }
    });
})();
