$(document).ready(function(){
    $("[data-title]").mouseenter(function(e){
         tooltip = $("<div class='tooltip'></div>");
        tooltip.text($(this).attr("data-title"));
        $("body").append(tooltip);
        tooltip.fadeIn("slow");


    }).mouseleave(function(e){
        tooltip.remove();
    }).mousemove(function(e){
        var mouseX = e.pageX +10;
        var mouseY = e.pageY +10;
        $(".tooltip").css({top: mouseY, left: mouseX});
    })
}
);