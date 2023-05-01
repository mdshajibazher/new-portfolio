/****************************************/
/*course-carousel*/
/****************************************/
$('.course-carousel').owlCarousel({
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
            items:2
        },
        1000:{
            items:3
        },
        1100:{
            items:3
        }
    }
});