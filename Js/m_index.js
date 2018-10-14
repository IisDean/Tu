/**
 * Created by IisDean on 2018/10/14.
 */
window.onload = function(){

    var mySwiper1 = new Swiper('.J-swiper-1', {
        pagination: {
            el: '.J-progress-1',
            type: 'bullets',
        },
        autoplay: true,
        loop: true,
    });

    var mySwiper2 = new Swiper('.J-swiper-2', {
        pagination: {
            el: '.J-progress-2',
            type: 'bullets',
        },
        autoplay: true,
        loop: true,
    });

    var mySwiper3 = new Swiper('.J-swiper-3', {
        pagination: {
            el: '.J-progress-3',
            type: 'bullets',
        },
        autoplay: true,
        loop: true,
    });

    var mySwiper4 = new Swiper('.J-swiper-4', {
        pagination: {
            el: '.J-progress-4',
            type: 'bullets',
        },
        autoplay: true,
        loop: true,
    });

    content.scrollTop = content.scrollHeight;

}