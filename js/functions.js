$(function(){
    $(window).scroll(function(){
        var wscroll = $(window).scrollTop();

        if (wscroll > 100) {
            $('#nav').removeClass("nav-hide").addClass("nav-show");
        }
        else {
            $('#nav').removeClass("nav-show").addClass("nav-hide");
        }
    });
});