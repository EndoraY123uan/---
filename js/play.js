/**
 * Created by 方圆 on 2019/7/12.
 * 播放音乐
 */
var audio1 = document.getElementById("audio-1");
$("#list-btn").on("click", function () {
    if (audio1.paused) {
        audio1.play();
        $("#btn-1>img").attr({
            src: "../images/playing.png",
        });
    }
    else {
        audio1.pause();
        $("#btn-1>img").attr({
            src: "../images/play.png",
        });
    }
});
$("#btn-1").on("click", function () {
    if (audio1.paused) {
        audio1.play();
        $("#btn-1>img").attr({
            src: "../images/playing.png",
        });
    }
    else {
        audio1.pause();
        $("#btn-1>img").attr({
            src: "../images/play.png",
        });
    }
});
var audio2 = document.getElementById("audio-2");
$("#btn-2").on("click", function () {
    if (audio2.paused) {
        audio2.play();
        $("#btn-2>img").attr({
            src: "../images/playing.png",
        });
    }
    else {
        audio2.pause();
        $("#btn-2>img").attr({
            src: "../images/play.png",
        });
    }
});
var audio3 = document.getElementById("audio-3");
$("#btn-3").on("click", function () {
    if (audio3.paused) {
        audio3.play();
        $("#btn-3>img").attr({
            src: "../images/playing.png",
        });
    }
    else {
        audio3.pause();
        $("#btn-3>img").attr({
            src: "../images/play.png",
        });
    }
});
var audio4 = document.getElementById("audio-4");
$("#btn-4").on("click", function () {
    if (audio4.paused) {
        audio4.play();
        $("#btn-4>img").attr({
            src: "../images/playing.png",
        });
    }
    else {
        audio4.pause();
        $("#btn-4>img").attr({
            src: "../images/play.png",
        });
    }
});
var audio5 = document.getElementById("audio-5");
$("#btn-5").on("click", function () {
    if (audio5.paused) {
        audio5.play();
        $("#btn-5>img").attr({
            src: "../images/playing.png",
        });
    }
    else {
        audio5.pause();
        $("#btn-5>img").attr({
            src: "../images/play.png",
        });
    }
});