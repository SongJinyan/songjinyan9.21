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

$(function (){
        lunbo("#listlunbobox",420,1200,420)
        lunbo(".exlunbobox",500,1200,500)
 // 折扣区域
 function disc(a){
    let oldColor='';
    $(a).mouseenter(function(){
        oldColor = $(this).css("background-color");
            $(this).css("background-color", "#f2f2f2")
    })
    .mouseleave(function(){
        $(this).css("background-color", oldColor)
    })
 }
 disc("#discount ul li")
 disc("#newbook .newbookleft .bt ul li")


 $("#newbook .newbookright ul li").mouseenter(function(){
    $(this).addClass("active").siblings().removeClass("active")
    let index=$(this).index();
    $("#newbook .newbookright").eq(index).addClass("cur").siblings().removeClass("cur")
})
// 热卖畅销
// 鼠标移入  显示当前div 隐藏其他div 并且隐藏自己的标题 
//   其他div的标题显示
$("#newbook .newbookright ul li").mouseenter(function(){
    $(this).css("height","140px");
    $(this).siblings().css("height","42px");
})




// ----------------独家提供-----------------------
$("#exclusive .exclusivetop ul li").mouseenter(function(){
    $(this).addClass("active").siblings().removeClass("active")
    let index=$(this).index()
    $("#exclusive .exclusivebt .listlunbo .pptbox").eq(index).addClass("cur").siblings().removeClass("cur")

})

// ------------------猜你喜欢-----------------------
$(function () {
    //定义一个变量保存索引值
    let index = 0;
    // 单个盒子的高度
    let singleBoxHeight = $("#guess >.pro-con .bt").outerHeight(true);
    //获取初始的个数
    let boxLength = $("#guess >.pro-con .bt").length
    //克隆第一个盒子添加到最后。
    $("#guess >.pro-con .bt").eq(0).clone(true).appendTo("#guess >.pro-con .box")
    // console.log(" 单个盒子的高度", singleBoxHeight);
    //给a标签添加点击事件
    $("#guess .rightbox").click(function () {
        index++;
        //运动的距离
        let st = -(index * singleBoxHeight);
        console.log("运动的距离:", st, "当前索引：", index);
        $("#guess >.pro-con .box").stop().animate({ top: st }, 200, function () {
            //当是最后一个盒子时，就立即回到第一个盒子。
            //这一瞬间用户是看不到的--------与轮播相似
            if (index === boxLength) {
                index = 0;
                $("#guess .box").css("top", index);
            }
        });
       
    })
})




})