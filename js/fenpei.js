$(function () {
    var url = window.location.href;
    if(url.indexOf(('psfp')>0)){
        $("#psfp").addClass('active');
    }
});
function show(evt,value) {
    var i ;
    var content = document.getElementsByClassName("fenpeicontent");
    var links = document.getElementsByClassName("ps_list");
    for(i=0;i<links.length;i++){
        links[i].className = links[i].className.replace(" fenpeiactive","");
    }
    for(i=0;i<content.length;i++){
        content[i].style.display="none";
    }
    evt.currentTarget.className += " fenpeiactive";
    document.getElementById(value).style.display = "block";
}
$(function () {
    $('input:checkbox').removeAttr('checked');
    $("#persons").text("");
    $(".accordion").click(function (event) {
        $(".canel").css('display','block')
    });
    $(".icon-x").click(function () {
        $(".canel").css('display','none')
    });


    var icd = 0;
    $("input:checkbox").click(function () {
        if(this.checked){
            icd+=1;
            $("#persons").append("<span id="+icd+">"+this.value+"</span>");

        }else{
            // $("span").remove("'#'+icd+'+'");
            $("input:checkbox+this.value+").remove()
        }
    });
    $("#clear").click(function () {
        $('input:checkbox').removeAttr('checked');
        $("#persons").text("");
    });
    // 删除人

});

