$(document).ready(() => {

   //banner

   $('.arrow').on('click', () => {
      $(".info__block").css("display", "block");
   });

   $('.exit').on('click', () => {
      $(".info__block").css("display", "none");
   });

 //slideshow 

   $(".slideshow__block").on("click", toogleClass);

   function toogleClass () {
      if ( $(this).hasClass("slideshow__block--active") === false) {
         $(".slideshow__block").removeClass("slideshow__block--active");
         $(this).addClass("slideshow__block--active");

         let result = $('.slideshow__block--active').attr('data-text');
         $('.text__info').text(result);

         let test = $('.slideshow__block--active').find('.slideshow__img__two').attr('src');
         $('.wrapper').css({
            'background' :  "url(../." + test +")",
            'background-size' : '100%'
         });
      }
   }


   var currentSlide = 0;

   setTimeout(changeSlide, 2000);

   function changeSlide() {
      currentSlide = ( $('.slideshow__block').length == currentSlide +1) ? 0 : currentSlide +1;
      $('.slideshow__block--active').removeClass('slideshow__block--active');
      $('.slideshow__block[data-id='+currentSlide+']').addClass('slideshow__block--active');

      let result = $('.slideshow__block--active').attr('data-text');
      $('.text__info').text(result);

      let test = $('.slideshow__block--active').find('.slideshow__img__two').attr('src');
      console.log(test)
      $('.wrapper').css({
         'background' :  "url(../." + test +")",
         'background-size' : '100%',
         'transition' : '0.3s',
      });

      setTimeout(changeSlide, 2000);
 
   } 
}); 

