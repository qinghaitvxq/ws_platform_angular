/**
 * Created by caipf on 2017/6/28.
 */
(function () {
    var app=angular.module("app");
    app.directive("dTable",function () {
        return{
            restrict:"E",
            template:"<div>sdfsdsfsdfs</div>",
            link:function (scope,element,attr) {
                // <table class="table table-striped">-->
                //     <!--<thead>-->
                //     <!--<th>第一类别</th>-->
                //     <!--<th>第二类别</th>-->
                //     <!--<th>名称</th>-->
                //     <!--<th>维护人</th>-->
                //     <!--<th>更新时间</th>-->
                //     <!--</thead>-->
                //     <!--<tbody>-->
                //     <!--<tr><td>hello</td>-->
                let dataTitle=["第一类别","第二类别","名称","维护人","更新时间"];
                let dataList=[{
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
                let headtemplate="",
                    thtemplate="";
                
                dataTitle.forEach(function (item) {
                    thtemplate+=`<th>${item}</th>`;
                });
                headtemplate=`<thead>${thtemplate}</thead>`;
                
                dataList.forEach(function (item) {
                    
                });
            }
        }
    });

})();
