/**
 * Created by yunxi on 2017/6/26.
 */
(function () {
    var app=angular.module("app");
    app.directive("flowTree",function () {
        return{
            restrict:'A',
            link:function (scope,element,attrs) {
                $(element).find('.easy-tree').myEasyTree({
                    showtips:true,
                    collapseAll:true
                });
            }
        }
    });


})();
