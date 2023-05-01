(function () {
	"use strict";

    jQuery(document).ready(function(){
        
        /****************************************/
        /*sticky .menu-bar*/
        /****************************************/
        $('.menu-bar').sticky({topSpacing:0});
        
        
        $(window).on('scroll', function () {
            if ($(window).scrollTop() === 0)
            {
                $("#menu-bar").addClass('fixedMenuBar');
            }
            else
            {
                $("#menu-bar").removeClass('fixedMenuBar');
            }

        });
        
        
        /****************************************/
        /*expand-form*/
        /****************************************/
        $('ul.top-menu li .fa-search').on('click', function(){
            $('.expand-form').toggleClass('form-active');
        });
        
        $('ul.top-menu li.yellow-bg .fa-share-alt').on('click', function(){
            $('.expand-social-icon ul').toggleClass('expand-social-list');
        });
        
        
        
        /****************************************/
        /*smooth-scroll*/
        /****************************************/
        $('.smooth-scroll a, a.smooth-scroll').bind('click', function(event){
            var $anchor = $(this);
            var headerH = '84';

            $('html, body').stop().animate({
                    scrollTop : $($anchor.attr('href')).offset().top - headerH + "px"
                }, 1500, 'easeInOutExpo');

                event.preventDefault();                    
            });

        });

  
    

    jQuery(window).load(function(){
        
        /****************************************/
        /*menu*/
        /****************************************/
        $(".menu-button").on('click', function () {
            $(this).next('ul').slideToggle('slow');
            $(this).toggleClass('active');
        });
        
        $('.mobile-menu li a').on('click', function(){
            $('.navbar-collapse').removeClass('in');
            $(".menu-button").removeClass('active');
        });
        
        $('li').find('.fa-angle-right').each(function(){
            $(this).on('click', function(){
                if( $(window).width() ) {
                    $(this).parent().next().slideToggle();
                }
                return false;
            });
        });
        
        
        /****************************************/
        /*counter*/
        /****************************************/
        if ($(".info-counter").length > 0)
        {
            $('.info-counter').appear();
            $('.info-counter').on('appear', loadSkills);
        }
        var coun = true;
        function loadSkills()
        {
            $(".info-counter").each(function () {
                var datacount = $(this).attr("data-limit");
                if (coun)
                {
                    $(this).find('h4.counter').each(function () {
                        var $this = $(this);
                        $({Counter: 0}).animate({Counter: datacount}, {
                            duration: 3800,
                            easing: 'swing',
                            step: function () {
                                $this.text(Math.ceil(this.Counter) + '');
                            }
                        });
                    });

                }
            });
            coun = false;
        }
        
    });


}());