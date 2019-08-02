/**
 * Created by 方圆 on 2019/7/12.
 */
/*登录注册弹出框*/
$("#login-btn").on("click", function () {
    $(".out-login").css({
        display: "block"
    });
});
$("#login-close").on("click", function () {
    $(".out-login").slideUp("slow");
});
$("#sign").on("click", function () {
    $(".out-login").slideUp("slow");
    $(".out-sign").slideDown("slow");
});
$("#sign-close").on("click", function () {
    $(".out-sign").slideUp("slow");
});
/*登录请求*/
$("#login").on("click", function () {
    var info = $(".login-content input").serialize();
    $.ajax({
        url: "../logic/login.php",
        type: "POST",
        dataType: "json",
        data: info,
        success: function (data) {
            var str1 = data.msg;
            if (str1 == "登录成功！") {
                $(".out-login").slideUp("slow");
                $(".header #login-btn>a").remove();
                var img = "<img src=\"../images/user.jpg\">";
                // var label = "<label>123456789</label>";
                $(".header #login-btn").html(img);
                // $(".header #login-btn").html(label);
                $(".header #login-btn").on("mouseenter", function () {
                    $(".user-menu").css({
                        display: "block"
                    });
                });
                $(".header .user-menu").on("mouseleave", function () {
                    $(".user-menu").css({
                        display: "none"
                    });
                });
            } else {
                $("#msg").html(data.msg);
            }
        },
    });
});
/*注册请求*/
$("#sign-btn").on("click", function () {
    var sign_info = $(".sign-content input").serialize();
    $.ajax({
        url: "../logic/sign.php",
        type: "POST",
        dataType: "json",
        data: sign_info,
        success: function (data) {
            var error_msg = data.msg;
            if (error_msg == "两次密码不一致！") {
                $("#sign-msg").html(data.msg);
            } else {
                alert("注册成功");
                $(".out-sign").slideUp("slow");
                $(".header #login-btn>a").remove();
                var img = "<img src=\"../images/user.jpg\">";
                // var label = "<label>123456789</label>";
                $(".header #login-btn").html(img);
                // $(".header #login-btn").html(label);
                $(".header #login-btn").on("mouseenter", function () {
                    $(".user-menu").css({
                        display: "block"
                    });
                });
                $(".header .user-menu").on("mouseleave", function () {
                    $(".user-menu").css({
                        display: "none"
                    });
                });
            }
        },
        error: function () {
            alert("出错了");
        }
    });
});