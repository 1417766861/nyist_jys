$(function () {
    var url = window.location.href;
    console.log(url);
    if(url.indexOf('person')>0){
        $("#check1").removeClass('subnav1');
        $("#check1").css('padding-left','0%');
        $("#check1").addClass('my1');
        var profileLi = $("#check1");
        profileLi.children().eq(0).addClass('active').siblings().removeClass('active');
    }
});
$(function () {
    $("#none").hide();
    $("#edit").click(function (event) {
        event.preventDefault();
        $("#none").show();
        $('#username').attr("disabled",false);
        $('#new_rep').attr("disabled",false);
        $('#pwd_new').attr("disabled",false);
    })
})