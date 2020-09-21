$(function () {
// ---------------------------------全选------------------------
        $(".selall").click(function () {
            let bool = $(this).prop("checked");
            $(".singlechk , .selall").prop("checked", bool);
            totalPrice()
            totalNum()
        })
        $("table .singlechk").click(function () {
            let singleNum = $("table .singlechk:checked").length;
            let singleAll = $("table .singlechk").length
            if (singleNum === singleAll) {
                $(".selall").prop("checked", true);
            } else {
                $(".selall").prop("checked", false);

            }
            totalPrice();
            totalNum()
        })
// -----------------------------------自增一------------------------------
        $("#shopcartarea table tbody .addbtn").click(function () {
            // alert(1)
            let num = $(this).siblings(".count").val()
            //   num++;//隐式类型转换
            ++num; //num=num+1
            $(this).siblings(".count").val(num);
            // 计算小计:  数量 * 单价
            singleTotalPrice(this, num);
            totalPrice()
            totalNum()

        })
// ------------------------------------自减一-------------------------------
        $("#shopcartarea table tbody .reducebtn").click(function () {
            let num = $(this).siblings(".count").val();

            if (num > 1) {
                //   num++;//隐式类型转换
                --num; //num=num+1
            }
            // 最后要把修改后的值赋给文本框 
            $(this).siblings(".count").val(num);
            // 计算小计:  数量 * 单价
            singleTotalPrice(this, num)
            totalPrice()
            totalNum()
        })
// --------------------------------------删除单个商品----------------------------- 
        $(".delbtn").click(function () {
            $(this).parent().parent().remove();
            //重新计算总价
            totalPrice()
            totalNum()
        })
// ---------------------------------------删除选中商品---------------------------
        $(".delallbtn").click(function () {

            $("table .singlechk:checked").each(function (index, dom) {
                $(this).parent().parent().remove();
            })
            //重新计算总价
            totalPrice()
            totalNum()

        })
// ---------------------------------------改变数量--------------------------
        $("#shopcartarea table tbody .count").keyup(function () {
            let num = $(this).val();
            if(isNaN(num)) {
                $(this).val(1) ;
                num = 1;
            }
            if (num > 200) {
                $(this).val(200)
                num=200;
            }           
            singleTotalPrice(this, num)
            totalPrice()
            totalNum()

        })
// --------------------------计算小计------------------------------------------
        function singleTotalPrice(obj,num) {
            // 计算小计:  数量 * 单价
            //函数中的this,默认指向window
            //单价
            let singleprice = $(obj).parent().siblings(".singleprice").html()
            //小计
            let singleTotalPrice = singleprice * num;//隐式类型转换
            //赋回页面
            $(obj).parent().siblings(".singleTotalPrice").html(singleTotalPrice.toFixed(2))
        }
    // ------------------------------计算总计-------------------------------
    function totalPrice(){
        let sum = 0;
        $("table .singlechk:checked").each(function (index, dom) {
            let singleTotalPrice = $(dom).parent().siblings(".singleTotalPrice").html();
            sum += parseFloat(singleTotalPrice);
        })
        //遍历结束得到总价
        $(".totalprice").html(sum.toFixed(2))
    }
// ---------------------------------------计算总计商品----------------------------
        function totalNum() {
            let num = 0;
            $("table .singlechk:checked").each(function (index, dom) {
                //    console.log( index,dom);
                let count = $(dom).parent().siblings().find(".count").val();
                num += parseInt(count);
                console.log(num);

            })
            //遍历结束得到总价
            $(".totalnum").html(num)
        }


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
           





})