$(document).ready(function() {
	"use strict";
	var currentSection = "";

	$(".home-nav").on("click", function(){
	    scrollToIt(".home-jumbo");
	    currentSection = ".home-jumbo";
	});

	$(".team-nav").on("click", function(){
	    scrollToIt("#parent-jumbo");
	    currentSection = "#parent-jumbo";
	});

	$(".meeting-nav").on("click", function(){
	    scrollToIt(".meetings-jumbo");
	    currentSection = ".meetings-jumbo";
	});

	$(".questions-nav").on("click", function(){
	    scrollToIt(".contact-jumbo");
	    currentSection = ".contact-jumbo";
	});

	$('body').on("keypress", function(e) {
		if(e.which === 13) {
			switch(currentSection) {
				case ".home-jumbo":
					currentSection = "#parent-jumbo";
					scrollToIt("#parent-jumbo");
					break;
				case "#parent-jumbo":
					currentSection = ".meetings-jumbo";
					scrollToIt(".meetings-jumbo");
					break;
				case ".meetings-jumbo":
					currentSection = ".contact-jumbo";
					scrollToIt(".contact-jumbo");
					break;
				case ".contact-jumbo":
					currentSection = ".home-jumbo";
					scrollToIt(".home-jumbo");
					break;
				default:
					currentSection = ".home-jumbo";
					scrollToIt(".home-jumbo");
			}
		}
	});

	function scrollToIt(className) {
		$('html, body').animate({
	    	scrollTop: ($(className).offset().top)
	    }, 500);
	}
});