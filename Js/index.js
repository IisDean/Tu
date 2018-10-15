/**
 * Created by IisDean on 2018/10/14.
 */

var site = new PCAS("ProvinceId", "CityId");//通过ID省市二级联动，无默认值，无文字提示信息

var $newList = $(".J-new-list");
function autoScroll() {
    var h = $newList.height();
    if (h < $newList.parent().height())return false;
    $newList.animate({
        'margin-top': "-30px"
    }, 1000, function () {
        $newList.css({'margin-top': "0px"}).find("li:first").appendTo($newList);
        autoScroll();
    });
}

autoScroll();

var mySwiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    slidesPerView: 5,
    initialSlide: 3,
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    coverflow: {
        rotate: 0,
        stretch: 0,
        depth: 20,
        modifier: 5,
        slideShadows: false
    },
})

//滚动到顶部
$(".J-goTop-btn").on("click", function () {
    goToLocation('html,body', 0);
});

//滚动到菜单位置
$(".J-goto-list li").on("click", function () {
    var name = $(this).attr('data-name');
    var h = $('div[data-location= '+ name +']').offset().top;
    goToLocation('html,body', h);
});

//滚动到指定位置
function goToLocation(obj, value) {
    $(obj).animate({
        scrollTop: value + 'px'
    }, 300);
}

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

//马上预约
$(".J-yuyue-btn").on("click",function(){
    var name = $("#userName").val(),
        mobile = $("#userMobile").val();
    if( name == '' )return alert('请输入姓名');
    if( mobile.length < 11 )return alert('请输入手机号码');


});