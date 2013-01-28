/*global $*/

$(document).ready(function () {
	if (!(/iPhone/).test(window.navigator.userAgent)) {
		return;
	}

	var navbar = $(".navbar");

	navbar.on("click", ".btn-navbar", function (e) {
		e.preventDefault();
	});

	navbar.on("ontouchstart" in window ? "touchend" : "click", ".btn-navbar", function (e) {
		e.preventDefault();
		navbar.toggleClass("navbar-active");
	});

	$(".nav > li > a.dropdown-toggle").on("click", function (e) {
		e.stopPropagation();
		e.preventDefault();
	});
});
