$(function() {
	
	var magnifierConfig = {
		magnifier : "#magnifier1",//最外层的大容器
		width : 342,//承载容器宽
		height : 350,//承载容器高
		moveWidth : null,//如果设置了移动盒子的宽度，则不计算缩放比例
		zoom : 5//缩放比例
	};

	var _magnifier = magnifier(magnifierConfig);

	/*magnifier的内置函数调用*/
	/*
		//设置magnifier函数的index属性
		_magnifier.setIndex(1);

		//重新载入主图,根据magnifier函数的index属性
		_magnifier.eqImg();
    */
    // ----------banner 种类选择点击事件
$("#githubbanner .bottom .detail .kind div").click(function(){
    $(this).css("border","2px solid #ff6600").siblings().css("border","none")
    $(this).find("img").css("display","block").siblings().css("display","none")
    $(this).siblings().find("img").css("display","none")
})

// -------------------hover事件-------------
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
disc("#item .itemmiddle ul li")
disc("#look .lookleft .bottom ul li")
	// -----------------------看了又看交互-----------------
	$("#look .lookright .lt div").mouseenter(function(){
		$(this).addClass("active").siblings().removeClass("active")
		let index=$(this).index();
		$("#look .lookright .jh").eq(index).addClass("cur").siblings().removeClass("cur")
	})

$("#look .lookright .jh .ltbottomt ul li").mouseenter(function(){
	$(this).addClass("active").siblings().removeClass("active")
	let index=$(this).index()
	$(" #look .lookright .ltbottom .ltbottomt .ltbottomb").eq(index).addClass("cur").siblings().removeClass("cur")
})
//$(xx).val()
// ++1
//$(xx).val()

$("#githubbanner .bottom .join .add").click(function(){
	let index=$(".num").val()
	index++ //index =  index + 1
	console.log(index);
	$(".num").val(index)
})

$("#githubbanner .bottom .join .remove").click(function(){
		let index=$(".num").val()
		index--		
		if(index<=1){
			$(".num").val(1)
		}else{
			$(".num").val(index)
		}
})


// 换页按钮点击事件
$("#look .skip ul li").click(function(){
	$(this).addClass("active").siblings().removeClass("active")

})








});