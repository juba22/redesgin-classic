/* global $ , alert , console , window */
$(function () {
    
    // Add active in links 
    
    $('.navbar li a').click(function () {
        
        $(this).parent().addClass('active').siblings().removeClass('active');
    });
    
    
    // edite height image for slider
    
    var mySlide = $('.slider-head');
    
    mySlide.height($(window).height());
    
    $(window).resize(function () {
        
        mySlide.height($(window).height());
        
        $('.slider').each(function () {
        
        
        $(this).css('padding-top', ($(window).height() - $('.bx-viewport').height())  / 2);
            
        });
    });
    
    
    // trigger the bxslider
    
    $('.slider').bxSlider();
    
    $('.slider-head .bx-viewport').each(function () {
        
        $(this).css('overflow', 'unset');
    });
    
    $('.slider').each(function () {
        
        
        $(this).css('padding-top', ($(window).height() - $('.bx-viewport').height())  / 2);
    });
    
    // Smoth Scrolltop
    
    $('.links li a').click(function () {
       
        $('html , body').animate({
            
            scrollTop : $('#' + $(this).data('value')).offset().top
            
        }, 700);
    });
    
    // Out Auto Slider Code
    
    (function autoSlider() {
        
        $('.testimonials .slid .active').each(function () {
            
            if(!$(this).is(':last-child')) {
                
                $(this).delay(3000).fadeOut(1000 , function() {
                    
                    $(this).removeClass('active').next().addClass('active').fadeIn()
                    
                    autoSlider()
                })
            } else {
                
                $(this).delay(3000).fadeOut(1000 , function() {
                    
                    $(this).removeClass('active');
                    
                    $('.testimonials .slid div').eq(0).addClass('active').fadeIn()
                    
                    autoSlider()
                })
             }
         })
        
    }())
    
    // trigger mixitup slid
    
    var containerEl = document.querySelector('#container');

    var mixer = mixitup(containerEl);
    
    // add class affect in li gallery 
    
    $('.shuffle li').click(function () {
        
        $(this).addClass('selector').siblings().removeClass('selector');
    });
    
    // trigger nicescroll
    
    $("body").niceScroll({
        cursorcolor:"#FFE100",
        cursorborder: "1px solid #FFE100",
        cursorwidth: "10px",
        zindex: "2",
        scrollspeed: '150'
    });
});