$(function(){
    $(window).scroll(function(){
        var wscroll = $(window).scrollTop();

        if (wscroll > $(window).height()) {
            $('#nav').removeClass("nav-hide").addClass("nav-show");

        }
        else {
            $('#nav').removeClass("nav-show").addClass("nav-hide");
        }
    });
});

window.sr = ScrollReveal(); 

sr.reveal('.nav-hide',{
	duration: 1000,
	origin: 'top',
	reset: true,
	scale: 1
});

sr.reveal('.nav-show',{
	reset: true
});

sr.reveal('.banner-text',{
	reset: true,
	duration: 1000
},500);

sr.reveal('.frase-text',{
	duration: 1000,
	origin: 'top',
	reset: true
});

sr.reveal('.autor',{
	duration: 1000,
	origin: 'bottom',
	reset: true,
	delay: 500
});