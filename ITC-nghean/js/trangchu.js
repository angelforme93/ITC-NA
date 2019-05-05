$(document).ready(function(){
        $('table').hover(function(){
        $(this).find('.dropdown-menu').fadeIn(100);
       },function(){
            $(this).find('.dropdown-menu').fadeOut(100);
       });


       $('nav ul li').hover(function(){
          $(this).find('.dropdown-menu').fadeIn(100);
         },function(){
              $(this).find('.dropdown-menu').fadeOut(100);
         });


     //     carrousel
     $('#carousel-id').carousel({
          pause: true,
          interval: 2000,
          });



          $('.owl-carousel').owlCarousel({
               loop:true,
               margin:10,
               nav:true,
               responsive:{
                   0:{
                       items:1
                   }
               }
           })
 
})
