$(function(){
$(".top__slider").slick ({
  arrows: false,
  dots: true,
  autoplay: true,
  fade: true,
   responsive: [
    {
      breakpoint: 1200,
      settings: {
      
        dots: false
      }
    },
 
  ]
});
  
  $(".reviews__slider").slick({
  arrows: false,
  dots: true,
  autoplay: true,
  slidesToShow: 4,
  slidesToScroll: 1,
      responsive: [
    {
      breakpoint: 1141,
      settings: {
      slidesToShow: 3,
      }
    },
     
      {
      breakpoint: 806,
      settings: {
      slidesToShow: 2,
      }
    },
        
        {
      breakpoint: 554,
      settings: {
      slidesToShow: 1,
      }
    }, 
 
  ]
});
  
  $(".menu__btn").on("click", function() {
    $(".menu__list").slideToggle();
    
  })
});