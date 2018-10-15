/**
 * Created by IisDean on 2018/10/14.
 */
window.onload = function(){

    var mySwiper1 = new Swiper('.J-swiper-1', {
        pagination: '.J-progress-1',
        // autoplay: 3000,
        loop: true,
    });

    var mySwiper2 = new Swiper('.J-swiper-2', {
        pagination: '.J-progress-2',
        autoplay: 3000,
        loop: true,
    });

    var mySwiper3 = new Swiper('.J-swiper-3', {
        pagination: '.J-progress-3',
        autoplay: 3000,
        loop: true,
    });

    var mySwiper4 = new Swiper('.J-swiper-4', {
        pagination: '.J-progress-4',
        autoplay: 3000,
        loop: true,
    });

    var site = new PCAS("ProvinceId","CityId");//通过ID省市二级联动，无默认值，无文字提示信息
    var site2 = new PCAS("ProvinceId2","CityId2");//通过ID省市二级联动，无默认值，无文字提示信息


    //一键定制
    $(".J-apply-btn").on("click",function(){
        var name = $("#userName").val(),
            mobile = $("#userMobile").val(),
            province = $("#ProvinceId").val(),
            cityId = $("#CityId").val();
        if( name == '' )return alert('请输入姓名');
        if( mobile.length < 11 )return alert('请输入手机号码');
        if( province == '' )return alert('请选择省份');
        if( cityId == '' )return alert('请选择市区');

    });


    //底部一键定制
    $(".J-apply-btn2").on("click",function(){
        var name = $("#userName2").val(),
            mobile = $("#userMobile2").val(),
            province = $("#ProvinceId2").val(),
            cityId = $("#CityId2").val();
        if( name == '' )return alert('请输入姓名');
        if( mobile.length < 11 )return alert('请输入手机号码');
        if( province == '' )return alert('请选择省份');
        if( cityId == '' )return alert('请选择市区');

    });

}