// 抽取轮播的方法
function lunbo(selector,boxh,w,h){
        $(selector).slidebox({
        boxh: boxh,//盒子的高度
        w: w,//图片的宽度
        h: h,//图片的高度
        isShow: true,//是否显示控制器
        isShowBtn: true,//是否显示左右按钮
        controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 12,//控制按钮宽度
        controlsH: 12,//控制按钮高度
        radius: 6//控制按钮圆角度数
        })
}
//文档加载事件
$(function (){
    lunbo("#slider",420,1000,420)
    // 电子书的轮播图
    lunbo(".lunboslider",220,332,220)
    // 服装
    lunbo(".sliderbox1",342,424,342)
  
   

//-------------------- 电子书选项卡-----------------------------
$("#ebook .ebooktop ul li").mouseenter(function(){
    $(this).addClass("active").siblings().removeClass("active")
    let index=$(this).index();
    $("#ebook .ebookleft").eq(index).addClass("cur").siblings().removeClass("cur")
})
// 新书畅销榜
// 鼠标移入  显示当前div 隐藏其他div 并且隐藏自己的标题 
//   其他div的标题显示
$("#ebook .ebookright ul li").mouseenter(function(){
    $(this).find("div").show();
    $(this).find(".stitle").hide();
    $(this).siblings().find("div").hide();
    $(this).siblings().find(".stitle").show();
})

// $("#cloth .clothtop ul li").mouseenter(function(){
//     $(this).addClass("active").siblings().removeClass("active")
//     let index=$(this).index();
//     $("#cloth .clothbottom").eq(index).addClass("cur").siblings().removeClass("cur")
// })
function tab(a){
    // alert(1)
    // console.log( $(a+".clothtop ul li"))
    $(a+" .clothtop ul li").mouseenter(function(){
            $(this).addClass("active").siblings().removeClass("active")
            let index=$(this).index();
            $(a+" .clothbottom").eq(index).addClass("cur").siblings().removeClass("cur")
        })
}// 服装选项卡
tab("#cloth");
// 户外运动选项卡
tab("#sport");
// 童装选项卡
tab("#childcloth")

// 推广商品
let oldColor='';
$("#spread ul li").mouseenter(function(){
    oldColor = $(this).css("background-color");
        $(this).css("background-color", "#f2f2f2")
})
.mouseleave(function(){
    $(this).css("background-color", oldColor)
})
// -----------获取窗口的卷动值(返回顶部)--------------------
let returnTop=document.querySelector("#onlinechat a")
let timerId=document.querySelector("#onlinechat timerId")
window.addEventListener("scroll", function () {
    // 获取到窗口卷动得值
    let st = document.documentElement.scrollTop||document.body.scrollTop
    console.log(st);
    if (st >= 900) {
       returnTop.style.display="block";
    } else {
        returnTop.style.display = "none";
    }
})
returnTop.addEventListener("click",function(){
    let timerId=setInterval(function(){
        // 先获取剩余的滚动值
        let st=document.documentElement.scrollTop||document.body.scrollTop;
        console.log("当前卷动的值：",st);
        // 剩余的滚动值
        let newst=st-50;
        // 剩余的滚动值赋回页面
        document.documentElement.scrollTop=newst;
        document.body.scrollTop=newst;
        // 当剩余卷动值小于或等于0时就清除定时器
        if(newst<=0){
            clearInterval(timerId)
        }
    },10)
})
// ------------------------------楼层卷动----------------------------------
// $("#btn1").click(function(){
//     let obj=$("#cloth").offset()
//     // console.log(obj.top);
//     $("html,body").animate({scrollTop:obj.top},500)
//     // $(window).scrollTop(obj.top)
// })
// function btn(c,d){
//     $(c).click(function(){
//         let obj=$(d).offset()
//         $("html,body").animate({scrollTop:obj.top},500)
//     })
// }
// btn("#btn1","#cloth")
// btn("#btn2","#sport")
// btn("#btn3","#childcloth")
// btn("#btn4","#house")

// // 顶部下滑固定位置
// let searchboxs=document.querySelector("header .searchboxs")
// window.addEventListener("scroll", function () {
//     // 获取到窗口卷动得值
//     let st = document.documentElement.scrollTop||document.body.scrollTop
//     console.log(st);
//     if (st >= 700) {
//         searchboxs.style.display="block";
//     } else {
//         searchboxs.style.display = "none";
//     }
// })
 /**
     *   楼层盒子的背景色
     * 第一种实现方法　：
     * 把每个标签对应的背景色存到一个数组中
     * 第二种实现方法：
     * 把每个标签对应的背景色存到自己的自定义属性中
     * 
     *  图标：
     * 　鼠标移入向左边移　40px
     * 　鼠标移出向左边移　0px
     * */  
    // let bgcolors = ['#93d46f', '#f65727', '#bb9dee', '#ff7394', '#c2ec51'];
    // $(".floornav ul li").hover(function () {
    //     let index = $(this).index();
    //     $(this).css("backgroundColor", bgcolors[index]);

    // }, function () {
    //     $(this).css("backgroundColor", '');
    // })
    /* 第二种实现方法：
    * 把每个标签对应的背景色存到自己的自定义属性中
    */
   $(".floornav ul li").hover(function () {
    //从自己的自定义属性中取出颜色值　
    // 　鼠标移入向左边移　40px        
    $(this).css({
        "backgroundColor":$(this).attr("bgc"),
        "backgroundPositionX":-40 ,
        width:40
    });
    

}, function () {
    // 鼠标移出向左边移　0px
    $(this).css({
        "backgroundColor":'',
        "backgroundPositionX":0 ,
        width:0
    });
}).click(function(){
    /**
     * 点击事件：
     * 1 找到对应的跳转区域， $(".floor").eq(index)
     * 2 取出它们距离文档顶部的距离，$(".floor").eq(index).offset().top 
     * 再赋给浏览器的滚动值　
     * $("html,body").scrollTop(  $(".floor").eq(index).offset().top  )
    */
       let $jumpBox=$(".floor").eq( $(this).index() )  ;
    //    console.log($jumpBox);
       let top = $jumpBox.offset().top;
    //    console.log(top);
    // $("html,body").scrollTop( top)
    $("html,body").stop().animate({ scrollTop:top },300)
})


})
