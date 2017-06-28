/**
 * Created by caipf on 2017/6/28.
 */
(function(){
    var app=angular.module("app");
    app.directive("navDropItem",function () {
        return{
            restrict:"E",
            replace:true,
            scope:{
                dropitems:'='
            },
            template:"<div class='nav-bar'></div>",
            link:function (scope,element,attr) {
                //template
                gettemplate(scope,element,attr);
                //action
                eventBind(element);
            }
        }
    });

    function gettemplate(scope,element,attr) {
        //html
        let dataArr=scope.dropitems;
        let controlHtml="";
        dataArr.forEach(function (item) {
            let inli="",inul="",outli="";

            if(item.items && item.items.length>0){
                item.items.forEach(function (item) {
                    inli+=`<li>${item}</li>`;
                });
                inul=`<ul class='dropdown-ul'> ${inli}</ul>`;
            }
            outli=`<li>
                                <a href='#'>${item.title} <span class='down-icon'></span></a>
                                ${inul}
                             </li>`;

            controlHtml+=outli;
        });
        controlHtml=`<ul>${controlHtml}</ul>`;
        element.append(controlHtml);
    }
    function eventBind(element) {
        $(element).on('mouseenter mouseleave','>ul>li',function (e) {
            let menu_ul=$(e.currentTarget).find("ul");
            if(!menu_ul||menu_ul.length==0 ) return;
            if(e.type=="mouseenter"){
                menu_ul.show();
            }
            if(e.type=="mouseleave"){
                menu_ul.hide();
            }
        });
    }
})();