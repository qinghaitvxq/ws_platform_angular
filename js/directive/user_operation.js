/**
 * Created by yunxi on 2017/6/26.
 */
(function () {
    var app=angular.module("app");
    app.directive("userOperation",function () {
        return{
            restrict:'E',
            templateUrl:"../template/userOperation.html",
            replace:true
        }
    });
})();
