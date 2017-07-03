/**
 * Created by caipf on 2017/6/26.
 */

let app=angular.module('app',['ui.router','ui.grid']);
let AppController=function ($scope) {
    $scope.test="hello world";
}
let FlowController=function ($scope,$state) {
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
    $scope.onDblClickRow=function (rowItem) {
        $state.go('flow_detail',{fid:rowItem.entity.fid});
    };
    $scope.myData=[{
        "tCategory":"hello1",
        "sCategory":"hello2",
        "name":"测试",
        "mtname":"璐璐",
        "utime":"2017-06-28",
        "fid":"001"
    },{
        "tCategory":"test1",
        "sCategory":"test2",
        "name":"白白",
        "mtname":"冬季",
        "utime":"2017-06-29",
        "fid":"002",
    },{
        "tCategory":"test3",
        "sCategory":"test3",
        "name":"白白3",
        "mtname":"冬季3",
        "utime":"2017-07-29",
        "fid":"003"
    }];

    $scope.columns = [{field:'tCategory',displayName:'第一类别'},
                        {field:'sCategory',displayName:'第一类别'},
                        {field:'name',displayName:'创建人'},
                        {field:'mtname',displayName:'维护人'},
                        {field:'utime',displayName:'更新时间'}];

    $scope.rowTemplate=`<div ng-repeat="(colRenderIndex, col) in colContainer.renderedColumns track by col.uid"
    ui-grid-one-bind-id-grid="rowRenderIndex + '-' + col.uid + '-cell'"
    class="ui-grid-cell"
    ng-class="{ 'ui-grid-row-header-cell': col.isRowHeader }"
    role="{{col.isRowHeader ? 'rowheader' : 'gridcell'}}"
    ng-dblclick="grid.appScope.onDblClickRow(row)"
    ui-grid-cell>`;

    $scope.gridOptions = {
        enableSorting: true,
        enableRowSelection: true,
        columnDefs: $scope.columns,
        data:$scope.myData,
        rowTemplate: $scope.rowTemplate


        // onRegisterApi:function (gridApi) {
        //     $scope.gridApi = gridApi;
        //     gridApi.selection.on.rowSelectionChanged($scope,function (row) {
        //
        //         var msg='row selected '+ row.isSelected;
        //         console.log(msg);
        //         $state.go("flow_detail",{fid:'1'})
        //     });
        // }
    };


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
            url:"/flow_detail/{fid}",
            templateUrl:"/ws_platform_angular/pages/flow_detail.html"
        })
        .state("flow_detail.flowtree",{
            url:"/flowtree",
            templateUrl:"/ws_platform_angular/pages/flow_detail_flowtree.html"
        })
        .state("flow_detail.loglist",{
            url:"/loglist",
            templateUrl:"/ws_platform_angular/pages/flow_detail_loglist.html"
        })
        .state("flow_detail.doc",{
             url:"/doc",
             templateUrl:"/ws_platform_angular/pages/flow_detail_doc.html"
        })
        .state("flow_detail.management",{
            url:"/management",
            templateUrl:"/ws_platform_angular/pages/flow_detail_management.html"
        });
});