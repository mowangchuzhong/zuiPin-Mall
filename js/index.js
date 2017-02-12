/**
 * Created by Administrator on 2017/2/10 0010.
 */
$(document).ready(function(){
    $('.location').hover(function () {
        $('.location').css({backgroundColor:'#ffffff'});
        $('.loca_box').css('display','block');
    },
    function () {
        $('.location').css({backgroundColor:'#ebebeb'});
        $('.loca_box').css('display','none');
    });
    //  下拉列表
    $('.sn-menu').hover(function(){
            $(this).find('.my-Acc').addClass('my-Accbg');
            $(this).find('.my-Menu').show();
        },
        function(){
            $(this).find('.my-Acc').removeClass('my-Accbg');
            $(this).find('.my-Menu').hide(50);
        });
    //购物车显示效果
    $('.cart_t').hover(function () {
        $('.cart_detail').show();
    },
    function () {
        $('.cart_detail').hide();
    }
    );
    //  侧边栏显示
    $('.sn_nav').children().mouseenter(function () {
        $('.popbox').eq($(this).index()).css("display","block");
        $(this).addClass("list_current");
    });
    $('.sn_nav').children().mouseleave(function () {
        $('.popbox').eq($(this).index()).css("display","none");
        $(this).removeClass("list_current");
    });

    $('.nav_right ul>li').mouseover(function(){
        $(this).addClass('bg1');
    });
    $('.nav_right ul>li').mouseout(function(){
        $(this).removeClass('bg1');
    })
    $('.banner_box').attr('style','background:'+$('.slide_img').children().eq(0).attr('name'));
    $('.slide_img').children().each(function(index){
        $(this).attr('id','slide'+(index+1));
    });
    //    轮播图制作
    var i=$('.slide_img').children().length;
    //定义一个变量i，来获取slide_img下面的<img>标签数量(长度);
    var j = 1;
    //定义一个变量j，初始化值为0。j表示slide_bar下面的标签数量;
    var cla = '';
    //定义一个变量cla，cla=''表示字符串；
    $('#slide').append('<div class="slide_bar"></div>');
    //追加<div id='slide'>下的子元素为<div class="slide_bar"></div>;
    for(j;j<=i;j++) {
        if(j == 1){
            cla = 'dq';
            //当j==1的时候，按钮的样式为dq；
        }
        else {
            cla = 'no';
            //其他时候，按钮样式为no;
        }
        $('.slide_bar').append('<div id="f'+j+'" class="'+cla+'" onclick="changeslide('+j+')">'+j+'</div>');
        //在j进行循环的时候，进行<div class="slide_bar">中<div>内容的追加；
    }

        $(".slide_img").mouseover(function(){stopAm();}).mouseout(function(){startAm();});
        $(".slide_bar div").each(function(index){
            var j = index+1;
            $(this).mouseover(function(){changeslide(j);stopAm();}).mouseout(function(){startAm();});
        });
        startAm();
    //    限时抢购图片效果显示
    $("#tabtag1 li").mouseover(function(){
        $(this).addClass('cur').siblings().removeClass("cur");
        $("#tabcon1 li").eq($(this).index()).css("display","block").siblings().css("display","none");
    });
    //记得给每个图片加动画效果哦。
    /*$('#tabcon1 li').mouseover(function () {
        $(this).css({border:'1px solid silver', boxShadow:'5px 5px 8px red'});
    });*/

    //手风琴的制作
    $('.rank_t').hover(function () {
        $('.rank_c').eq($(this).index()).show();
    },function () {
        $('.rank_c').eq($(this).index()).hide();
    });
    //内容轮播图的制作
        $(function () {
        var oWidth = $("#tabcon2:first").width();
        $("#tabtag2 li").mouseover(function() {
            var index = $(this).index();
            i = index;
            $(this).addClass("cur").siblings().removeClass("cur");
            $("#tabcon2").stop().animate({
                left: index * oWidth * (-1) + "px"
            });
        })
        /*var timer=null;
        var i=1;
        function autoPlay(){
            var oLength = $("#tabtag2 li").length;
            timer = setInterval(function() {
                i++;
                if(i == (oLength + 1)) {
                    i = 1;
                    $("#tabcon2").css({
                        "left": "0px"
                    })
                }
                $("#tabcon2").stop().animate({
                    left: i * oWidth * (-1) + "px"
                });
                $("#tabtag2").find("li").eq(i % oLength).addClass("cur").siblings().removeClass("lei");
            }, 2000);
        }
        autoPlay();
        $("#tabcon2").mouseover(function() {
            clearInterval(timer);
        });
        $("#tabcon2").mouseout(function() {
            autoPlay();
        });*/
        })






    //上下滚动轮播图的制作
        var oHeight = $(".oneZuiPin_center ul li img").height();
        $(".oneZuiPin_zero span").mouseover(function() {
            var index = $(this).index();
            i = index;
            $(this).addClass("cc").siblings().removeClass("cc");
            $(".oneZuiPin_centerLeft ul").stop().animate({
                "top": -i* oHeight + "px"
            });
        })
        var timer=null;
        var i=0;
        function autoPlay(){
            var oLength = $(".oneZuiPin_zero span").length;
            timer = setInterval(function() {
                i++;
                if(i>=3) {
                    $(".oneZuiPin_centerLeft ul").css({
                        "top":"0"
                    })
                    i = 0;
                }
                $(".oneZuiPin_centerLeft ul").stop().animate({
                    "top": -i * oHeight
                });
                $(".oneZuiPin_zero span:eq("+i+")").addClass("cc").siblings().removeClass("cc");
            }, 2000);
        }
        autoPlay();
        $(".oneZuiPin_zero span").mouseover(function() {
            clearInterval(timer);
        });
        $(".oneZuiPin_zero span").mouseout(function() {
            autoPlay();
        });




});