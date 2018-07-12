$(function () {
    var url = window.location.href;
    console.log(url);
    if(url.indexOf('xueyuan_count')>0){
        $("#check2").removeClass('subnav2');
        $("#check2").css('padding-left','0%');
        $("#check2").addClass('my2');
        var profileLi = $("#check2");
        profileLi.children().eq(0).addClass('active').siblings().removeClass('active');

        // $("#down").css({'display':'inline','padding-left':'45px'});
        // $("#right").css('display','none');

    }else if(url.indexOf('jiaoyanshi_count')>0){
        $("#check2").removeClass('subnav2');
        $("#check2").css('padding-left','0%');
        $("#check2").addClass('my2');
        var profileLi = $("#check2");
        profileLi.children().eq(1).addClass('active').siblings().removeClass('active');
        // $("#down").css('display','inline');
        // $("#right").css('display','none');
    }else if(url.indexOf('pingshen_count')>0){
        $("#check2").removeClass('subnav2');
        $("#check2").css('padding-left','0%');
        $("#check2").addClass('my2');
        var profileLi = $("#check2");
        profileLi.children().eq(2).addClass('active').siblings().removeClass('active');
        // $("#down").css('display','inline');
        // $("#right").css('display','none');
    }else if(url.indexOf('history')>0){
        $("#lsjl").addClass('active');
    }else if(url.indexOf('paihangbang')>0){
        $("#phb").addClass('active');
    }else if(url.indexOf(('see_jys')>0)) {
        $("#jysck").addClass('active');
    }
});
