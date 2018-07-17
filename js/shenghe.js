$(function () {
    var url = window.location.href;
    console.log(url);
    if(url.indexOf('jiaoyanshi_shenghe_history')>0){
        $("#check3").removeClass('subnav3');
        $("#check3").css('padding-left','0%');
        $("#check3").addClass('my3');
        var profileLi = $("#check3");
        profileLi.children().eq(1).addClass('active').siblings().removeClass('active');
    }else if(url.indexOf('jiaoyanshi_shenghe_detail')>0){
        $("#check3").removeClass('subnav3');
        $("#check3").css('padding-left','0%');
        $("#check3").addClass('my3');
        var profileLi = $("#check3");
        profileLi.children().eq(0).addClass('active').siblings().removeClass('active');
    }else if(url.indexOf('jiaoyanshi_shenghe')>0){
        $("#check3").removeClass('subnav3');
        $("#check3").css('padding-left','0%');
        $("#check3").addClass('my3');
        var profileLi = $("#check3");
        profileLi.children().eq(0).addClass('active').siblings().removeClass('active');
    }
});