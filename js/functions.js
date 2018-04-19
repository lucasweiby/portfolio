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

sr.reveal('.img',{
	duration: 1000,
	origin: 'top',
	reset: 'true'
},500);

sr.reveal('.port-title',{
	duration: 1000,
	origin: 'bottom',
	reset: 'true',
	delay: 1000
},500);

sr.reveal('.port-text',{
	duration: 1000,
	origin: 'bottom',
	reset: 'true',
	delay: 2000
},500);

sr.reveal('.port-btn',{
	duration: 1000,
	origin: 'bottom',
	reset: 'true',
	delay: 3000
},500);


$(document).ready(function(){
	// Add smooth scrolling to all links
	$("a").on('click', function(event) {
  
	  // Make sure this.hash has a value before overriding default behavior
	  if (this.hash !== "") {
		// Prevent default anchor click behavior
		event.preventDefault();
  
		// Store hash
		var hash = this.hash;
  
		// Using jQuery's animate() method to add smooth page scroll
		// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
		$('html, body').animate({
		  scrollTop: $(hash).offset().top
		}, 800, function(){
	 
		  // Add hash (#) to URL when done scrolling (default click behavior)
		  window.location.hash = hash;
		});
	  } // End if
	});
  });