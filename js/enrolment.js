/* 表单验证 */
$(function () {
    // 在键盘按下并释放及提交后验证提交表单
    $("#signupForm").validate({
        rules: {
            username: {
                required: true,
                username:true,
            },
            pwd: {
                required: true,
                pwd:true
            },
            repwd: {
                required: true,
                repwd:true,
                equalTo: "#pwd"
            },
            telnumber: {
                required: true,
                telnumber:true
            },
            sendbtn: {
                required: true,
                minlength: 3
            },
            sendphone: {
                required: true,
                minlength: 3
            },
           agree: "required"
        },
        messages: {
            username: {
                required: "请输入用户名",
            },
            pwd: {
                required: "请输入密码",
            },
            repwd: {
                required: "请再次输入密码",
                equalTo: "两次密码输入不一致"
            },
            telnumber: {
                required: "请输入电话号码",
                minlength: "电话号码必需由五个字符组成"
            },
            sendbtn: {
                required: "请输入验证码",
                minlength: "验证码必需由五个字符组成"
            },
            sendphone: {
                required: "请输入手机验证码",
            },
            agree: "请接受我们的声明",
            
        }
    })
    //用户名
    jQuery.validator.addMethod("username", function(value, element) {   
            var tel = /^[A-Za-z0-9]{5,10}$/;
            return this.optional(element) || (tel.test(value));
    }, "请正确填写您的用户名");
    //密码
    jQuery.validator.addMethod("pwd", function(value, element) {   
            var tel = /^[A-Za-z0-9]{6,16}$/;
            return this.optional(element) || (tel.test(value));
    }, "请正确填写您的密码");
    //验证密码
    jQuery.validator.addMethod("repwd", function(value, element) {   
        var tel = /^[A-Za-z0-9]{6,16}$/;
        return this.optional(element) || (tel.test(value));
    }, "两次密码输入不一致");
    //电话号码
    jQuery.validator.addMethod("telnumber", function(value, element) {   
        var tel = /^1[34578]\d{9}$/
        return this.optional(element) || (tel.test(value));
    }, "请正确填写您的电话号码");

});

/* 登录 */

/* 用户名 */
/* 用户名添加输入事件 */
$('#register #username').keyup(function(){
    let delstr=$('#username').val();
    if(delstr.length>0){   
        $(this).siblings('img').css('display','block');
    }else{
        $(this).siblings('img').css('display','none');        
    }
 
})
/* 添加删除图片的点击事件 */
$('#register .delimg').click(function(){
    $(this).css('display','none');  
    $(this).siblings('input').prop('value',"");         
})

/* 电话号码 */
/* 电话号码添加输入事件 */
$('#register #telnumber').keyup(function(){
    let delstr=$('#telnumber').val();
    if(delstr.length>0){   
        $(this).siblings('img').css('display','block');
    }else{
        $(this).siblings('img').css('display','none');        
    }
 
})

/* 密码 */
/* 用密码添加输入事件 */
$('#register #pwd').keyup(function(){
    let delstr=$('#pwd').val();
    if(delstr.length>0){   
        $(this).siblings('img').css('display','block');
    }else{
        $(this).siblings('img').css('display','none');        
    }
})
/* 添加关闭图片的点击事件 */
/* 关于点击图片切换要使用标杆思想 */
let flag=false;
$('#register .climg').click(function(){
    if(!flag){
        $(this).prop('src',"./images/open.png");
        $(this).siblings('input').prop('type',"text");
    }else{
        $(this).prop('src',"./images/close.png");
        $(this).siblings('input').prop('type',"password"); 
    }
    flag=!flag;
})

/*再次输入密码 */
/* 给再次密码添加输入事件 */
$('#register #repwd').keyup(function(){
    let delstr=$('#repwd').val();
    if(delstr.length>0){   
        $(this).siblings('img').css('display','block');
    }else{
        $(this).siblings('img').css('display','none');        
    }
})