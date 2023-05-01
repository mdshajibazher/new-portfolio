(function(){
	$('.banner-carousel').owlCarousel({
				loop:true,
				margin:30,
				responsiveClass:true,
				autoplay: 5000,
				nav:true,
				navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
				responsive:{
						0:{
								items:1
						},
						600:{
								items:1
						},
						1000:{
								items:2
						},
						1100:{
								items:2
						}
				}
	});


	$('#bars i').on('click', function(){
		$('ul#menu').slideToggle();
	});



	// WOW INIT
  if ($(window).width() > 766){
     var wow = new WOW({
         mobile: false
     });
     wow.init();
  }


	$('#backTop').backTop({
      'position' : 1600,
      'speed' : 500,
      'color' : 'red',
  });


})();
