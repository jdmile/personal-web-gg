// templatemo 467 easy profile

// PRELOADER

$(window).load(function(){
    $('.preloader').delay(1000).fadeOut("slow"); // set duration in brackets    
});

// HOME BACKGROUND SLIDESHOW
$(function(){
    jQuery(document).ready(function() {
		$('body').backstretch([
	 		 "images/tm-bg-slide-1.jpg", 
	 		 "images/tm-bg-slide-2.jpg",
			 "images/tm-bg-slide-3.jpg"
	 			], 	{duration: 3200, fade: 1300});
		});
})


document.addEventListener("DOMContentLoaded", function() {
    const socialLinks = document.querySelectorAll(".social-icons a");

    socialLinks.forEach(link => {
        link.addEventListener("click", function() {
            this.classList.add("clicked");
            setTimeout(() => {
                this.classList.remove("clicked");
            }, 300);
        });
    });
});
