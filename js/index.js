// $(function () {
//     $('.options-list>ul>li>a').click(function (event) {
//         var that = $(this);
//         if(that.children('a').attr('href') == '#'){
//             event.preventDefault();
//         }
//         if(that.parent().hasClass('unfold')){
//             that.parent().removeClass('unfold');
//         }else{
//             that.parent().addClass('unfold').siblings().removeClass('unfold');
//         }
//         console.log('coming....');
//     });
//
// });

$(function () {
    var drop = 0;
    $("#person-detail").click(function (event) {
        event.preventDefault();
        var that = $(this);
        if($("#check1").hasClass('subnav1')){
            // 打开时候
            $("#check1").removeClass('subnav1');
            $("#check1").css('padding-left','0%');
            $("#check1").addClass('my1');

        }else{
            $("#check1").addClass('subnav1')
        }
    });


    $("#id-detail").click(function (event) {
        event.preventDefault();
        var that = $(this);

        if($("#check2").hasClass('subnav2')){
            // 打开时候
            $("#check2").removeClass('subnav2');
            $("#check2").css('padding-left','0%');
            $("#check2").addClass('my2');

            $("#down").css('display','inline');
            $("#right").css('display','none');
        }else{
            $("#check2").addClass('subnav2');
            $("#down").css('display','none');
            $("#right").css({'display':'inline','padding-left':'45px'});
        }
    });
    $("#drop_down").click(function () {
        if(drop==0){
            $("#drop_name").css({'display':'block'});
            $("#drop_name ul li").css({'background':'#40E0D0','border-radius':'5px'});
            drop=1;
        }else{
            $("#drop_name").css('display','none');
            drop=0;
        }
    })
    $("#judge").click(function (event) {
        event.preventDefault();
        var that = $(this);
        if($("#check3").hasClass('subnav3')){
            $("#check3").removeClass('subnav3');
            $("#check3").css('padding-left','0%');
            $("#check3").addClass('my3');
        } else{
            $("#check3").addClass('subnav3')
        }
    });
});

