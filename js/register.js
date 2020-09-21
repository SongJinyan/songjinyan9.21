$().ready(function () {
    // 在键盘按下并释放及提交后验证提交表单
    $("#signupForm").validate({
      rules: {
        username: {
          required: true,
          myname: true,
        },
        psd:{
          required: true,
          mypwd: true,
        }},


      messages: {
        username: {
          required: "请输入用户名",
        },
        psd: {
          required: "请输入密码",

        },
      },
    })
  });
  //用户名
  jQuery.validator.addMethod("myname", function (value, element) {
    var tel = /^[A-Za-z0-9_]{4,10}$/;
    return this.optional(element) || (tel.test(value));
  }, "请填写正确的用户名");
  // 密码
  jQuery.validator.addMethod("mypwd", function (value, element) {
    var tel = /^[A-Za-z0-9_]{6,12}$/;
    return this.optional(element) || (tel.test(value));
  }, "请填写正确的密码");

// ------------------------交互-----------------------
$(".repicture .denglu .topdl span").mouseenter(function(){
  $(this).addClass("active").siblings().removeClass("active")
  let index=$(this).index()
  $(".repicture .denglu .btdl .pic").eq(index).addClass("cur").siblings().removeClass("cur")

})


