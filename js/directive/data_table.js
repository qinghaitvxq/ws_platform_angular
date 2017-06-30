/**
 * Created by caipf on 2017/6/28.
 */
(function () {
    var app=angular.module("app");
    app.directive("dTable",function ($location) {
        return{
            restrict:"E",
            template:"<table class='table table-striped'></table>",
            replace:true,
            link:function (scope,element,attr) {
                //html
                let dataTitle=["第一类别","第二类别","名称","维护人","更新时间"];
                let dataObj1=iteratorObj({
                    "tCategory":"hello1",
                    "sCategory":"hello2",
                    "name":"测试",
                    "mtname":"璐璐",
                    "utime":"2017-06-28"
                });
                let dataObj2=iteratorObj({
                    "tCategory":"test1",
                    "sCategory":"test2",
                    "name":"白白",
                    "mtname":"冬季",
                    "utime":"2017-06-29"
                });

                let dataList=[dataObj1,dataObj2];

                let headtemplate="",
                    thtemplate="";
                
                dataTitle.forEach(function (item) {
                    thtemplate+=`<th>${item}</th>`;
                });
                headtemplate=`<thead>${thtemplate}</thead>`;

                let trtemplate="",
                    tbodytemplate="";
                dataList.forEach(function (item) {
                    let  tdtemplate="";
                    for(let data of item){
                        tdtemplate+=`<td>${data}</td>`;
                    }
                    trtemplate+=`<tr>${tdtemplate}</tr>`;
                });
                tbodytemplate=`<tbody>${trtemplate}</tbody>`;

                $(element).append(headtemplate).append(tbodytemplate);

                //action
                $(element).on("click","td",function () {
                    window.location.href="#!/flow_detail";
                });
            }
        }
    });

    function iteratorObj(obj) {
        obj[Symbol.iterator]=function(){
            let properties=Object.keys(obj);
            let count=0;
            let isDone=false;

            let next=()=>{
                if(count>=properties.length){
                    isDone=true;
                }
                return {done:isDone,value:obj[properties[count++]]}
            }
            return {next};
        }
        return obj;
    }

})();
