/**
 * Created by caipf on 2017/6/26.
 */

let app=angular.module('app',[]);
let AppController=function ($scope) {
    $scope.test="hello world";
}
app.controller("AppController",AppController);