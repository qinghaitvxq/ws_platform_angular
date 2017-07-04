/**
 * Created by caipf on 2017/7/4.
 */
(function () {
    var app=angular.module("app");
    app.directive("createNewFlow",function () {
        return{
            restrict:'E',
            templateUrl:"../pages/popupPage/create_new_flow.html",
            link:function (scope,element,attrs) {

            }
        }
    });


})();
