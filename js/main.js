jQuery(document).ready(function($){
    
//    search js
    
$('.show-search').click(function(){
    $('.search-form').fadeIn(300);
        $('.search-form').fadeOut(5000);
});	
//    animate wow
    new WOW().init();
    
$('.tlt').textillate({ 
  in: { effect: 'splat' },
  out: { effect: 'fadeInLeftBig', sync: true },
  loop: true
});
    
     /*----------------------------------------------------*/
  /*  Nivo Lightbox
  /*----------------------------------------------------*/
  
  $('.lightbox').nivoLightbox({
    effect: 'fadeScale',
    keyboardNav: true,
    errorMessage: 'The requested content cannot be loaded. Please try again later.'
  });
    
    
//    owl carousel js latest news
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
});

//	testtimonial  owlcaresoul 
    $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
//    countdown js
      $('.timer').countTo({
    speed: 2000,
    refreshInterval: 50,
    formatter: function (value, options) {
      return value.toFixed(options.decimals);
    },
    onUpdate: function (value) {
      console.debug(this);
    },
    onComplete: function (value) {
      console.debug(this);
    }
  });
    
//    back to top link js
     var duration = 1000;
    $(window).scroll(function(){
      if($(this).scrollTop() >200){
          $('.go-to-top').fadeIn(400);
      } 
        else{
            $('.go-to-top').fadeOut(300);
        }
        
    });
    
    $('.go-to-top').click(function(){
        $('html,body').animate(
            {scrollTop:0},600);
  
    });
    
//    master li scroolwer
    $('.you-are-master').liScroll();
    
//    slick nav JS
    
    $('.nav').slicknav();
    
    
    $('.slicknav_parent ').click(function(){
       $('.slicknav_parent ul').removeClass('dropdown'); 
    });
});