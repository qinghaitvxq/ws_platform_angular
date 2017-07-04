(function ($,easytree) {
    let treeMethods={
        collapseall: function() {
            let _this=this;
            var ele_html="<div class='btn-red-font' id='collapseall'>"+
                "<span class='glyphicon glyphicon-chevron-up'></span>&nbsp;<span>收起全部</span>"+
                "</div>";

            this.before(ele_html);

            this.parent().on("click","#collapseall",function (e) {
                //var children = $(easyTree).parent('li.parent_li').find(' > ul > li');
                var collapse_ele=$(this);
                var f_li=_this.find('li.parent_li');
                var children = f_li.find(' > ul > li ');
                var collapse=collapse_ele.find(".glyphicon-chevron-up").length>0?true:false;
                if(collapse){
                    //要收起全部
                    collapse_ele.find(".glyphicon")
                        .addClass('glyphicon-chevron-down')
                        .removeClass('glyphicon-chevron-up')
                        .siblings('span')
                        .text('展开全部');
                    f_li.find('.glyphicon')
                        .addClass("glyphicon-plus")
                        .removeClass("glyphicon-minus");
                    f_li.find(' > ul > li')
                        .hide('fast');

                }else{
                    //要展开全部
                    collapse_ele.find(".glyphicon")
                        .addClass('glyphicon-chevron-up')
                        .removeClass('glyphicon-chevron-down')
                        .siblings('span')
                        .text('收起全部');
                    f_li.find('.glyphicon')
                        .addClass("glyphicon-minus")
                        .removeClass("glyphicon-plus");
                    f_li.find(' > ul > li')
                        .show('fast');
                }
            });

        },
        showTips:function () {
            let _this=this;
            this.find("li>span").each(function () {
                var desc=$(this).parent('li').attr('desc');

                if(desc && desc.length>0) {
                    var right_tips = "<div class='right_tips'> "
                        + "<div class='left-arrow'></div>"
                        + "<div class='tips_desc'>"
                        +"<span class='glyphicon glyphicon-chevron-down right_tips_arrow'></span>"
                        + "</div>"
                        + "</div>";

                    $(this).after(right_tips);

                    var cur_ele_pos = $(this).offset();
                    var left = cur_ele_pos.left;
                    var top = cur_ele_pos.top;
                    var width = $(this).width();
                    var height = $(this).height();

                    var right_tips=$(this).next(".right_tips");

                    right_tips.css({
                        "position": "absolute",
                        "display": "block",
                        "left": width + 30 + "px",
                        "top": "10px",
                    }).find('.tips_desc').append(desc)
                    //     .on("mouseenter",function (e) {
                    //     $(this).css({
                    //         "height":"auto",
                    //         "position":"relative",
                    //         "z-index":"100"
                    //     });
                    // }).on("mouseleave",function (e) {
                    //     $(this).css({
                    //         "height":"32px",
                    //         "z-index":"1"
                    //     });
                    // })
                        .find(".right_tips_arrow")
                        .on("mouseenter",function (e) {
                            $(this).parent().css({
                                "height":"auto",
                                "position":"relative",
                                "z-index":"100"})
                        }).on("mouseleave",function (e) {
                        $(this).parent().css({
                            "height":"32px",
                            "z-index":"1"
                        });
                    })

                    var element= right_tips
                        .clone()
                        .css({display:'inline',width:'auto',visibility:'hidden'})
                        .appendTo('body');
                    if(element.width()>right_tips.width()){
                        right_tips.find(".right_tips_arrow").css({"display":"block"});
                    }

                }
            });
        }
     }

     $.fn.myEasyTree=function(options){

         //执行原插件的行为
         easytree.call(this,options);

         //展开全部
         if(options.collapseAll) {
             treeMethods.collapseall.call(this);
         }
         //展示描述
         if(options.showtips){
             treeMethods.showTips.call(this);
         }
     }
})(jQuery, $.fn.EasyTree);