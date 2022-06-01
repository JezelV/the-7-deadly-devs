
/*=============================================
	=    		 Preloader			      =
=============================================*/
function preloader() {
	$('#ctn-preloader').addClass('loaded');
	$("#loading").fadeOut(700);
	// Una vez haya terminado el preloader aparezca el scroll

	if ($('#ctn-preloader').hasClass('loaded')) {
		// Es para que una vez que se haya ido el preloader se elimine toda la seccion preloader
		$('#preloader').delay(1200).queue(function () {
			$(this).remove();
		});
	}
}
$(window).on('load', function () {
	preloader();
	mainSlider();
	aosAnimation();
	popupModal();
	wowAnimation();
});