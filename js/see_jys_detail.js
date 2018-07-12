$(function () {
    var url=window.location.href;
   if(url.indexOf(('see_jys_detail')>0))
    {
        $("#jysck").addClass('active');
    }
});
function show(evt,value) {
    var i ;
    var content = document.getElementsByClassName("tabcontent");
    var links = document.getElementsByClassName("mk_list");
    for(i=0;i<links.length;i++){
        links[i].className = links[i].className.replace(" myactive","");
        console.log(i);
        if(i!=0){
            $("#default").css({'border-bottom':'0'});
        }
    }
    for(i=0;i<content.length;i++){
        content[i].style.display="none";
    }
    evt.currentTarget.className += " myactive";
    document.getElementById(value).style.display = "block";
}
