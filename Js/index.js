/**
 * Created by IisDean on 2018/10/14.
 */

var site = new PCAS("ProvinceId","CityId");//通过ID省市二级联动，无默认值，无文字提示信息

var $newList = $(".J-new-list");
function autoScroll(){
    var h = $newList.height();
    if( h < $newList.parent().height() )return false;
    $newList.animate({
        'margin-top' : "-30px"
    },1000,function(){
        $newList.css({'margin-top' : "0px"}).find("li:first").appendTo($newList);
        autoScroll();
    });
}

autoScroll();

bodys.scrollTop = bodys.scrollHeight;

