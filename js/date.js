/**
 * Created by 方圆 on 2019/7/12.
 */
$(document).ready(function () {
    /*时间获取*/
    var date = new Date();
    $("#week").html("星期 " + date.getDay());
    $("#day").html(date.getMonth() + 1 + "月" + date.getDate() + "日");
});