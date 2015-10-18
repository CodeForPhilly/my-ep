$(document).ready(function() {
	"use strict";
	$(".home-nav").on("click", function(){
	    scrollToIt(".home-jumbo");
	});

	$(".team-nav").on("click", function(){
	    scrollToIt("#parent-jumbo");
	});

	$(".meeting-nav").on("click", function(){
	    scrollToIt(".meetings-jumbo");
	});

	$(".questions-nav").on("click", function(){
	    scrollToIt(".contact-jumbo");
	});


	function scrollToIt(className) {
		$('html, body').animate({
	    	scrollTop: ($(className).offset().top)
	    }, 500);
	}
});