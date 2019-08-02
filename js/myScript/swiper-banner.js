/**
 * Created by 方圆 on 2019/7/12.
 * 使用 swiper 插件
 * 实现背景颜色随轮播图图片主色调变化
 */
var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    effect: 'fade',
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination'
    },
    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    speed: 1500,
    autoplay: {
        disableOnInteraction: false,
        delay : 3000
    },
    // 事件
    on: {
        //图片轮播时的颜色渐变
        slideChangeTransitionStart: function () {
            var index = this.activeIndex;
            if (index == 0) {
                index = this.imagesToLoad.length - 2;
            }
            if (index == this.imagesToLoad.length - 1) {
                index = 1;
            }
            //获取当前图片的id
            var img = document.getElementById(this.imagesToLoad[index].getAttribute("id"));
            // 更改背景色
            changeColor(img, "#slide-container");
        }
    }
});

/**
 * 更改背景色实现渐变
 * @param img 轮播图的图片
 * @param selector  背景属性的 id
 */
function changeColor(img, selector) {
    //改变颜色
    RGBaster.colors(img, {
        //从调色板返回最多30个顶级颜色
        paletteSize: 30,
        //排除 白色
        exclude: ['rgb(255,255,255)'],
        //获取成功之后
        success: function (payload) {
            // 获取转换后的 16进制颜色
            var color = getHex(payload.dominant);
            //实现颜色渐变
            $(selector).animate({
                    backgroundColor: color
                }, 1000
            )
        }
    })
}

/**
 * rgb颜色转换为十六进制颜色
 * @param color
 * @returns {string}
 */
function getHex(color) {
    var rgb = color.split(',');
    var r = parseInt(rgb[0].split('(')[1]);
    var g = parseInt(rgb[1]);
    var b = parseInt(rgb[2].split(')')[0]);
    var hex = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    return hex;
}