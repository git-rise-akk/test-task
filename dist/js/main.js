$(document).ready(() => {

    let noteOne = ' <div class="noteTow"> Чего сидишь? Порадуй котэ, <a href="#" class="colortext">купи.</a> </div>';
    
    
    $('.package__block--disabled').each(function() {            
        let titleText = $(this).find('.package__title').text();
        let filling = titleText.split(" ");
        $(this).next('.note').text(`Печалька, с ${filling[2]} закончился.`).css("color", "#ffff66");
    });
    
    $(".package__block").on("click", function() {

        if ($(this).hasClass('package__block--disabled')) {
            return null;
        }else {
            $(this).toggleClass('package__block--active');
        }

        let packageText = $(this).find(".package__text").attr("data-text");
        let noteTwo = $(this).closest('.package').find('.note').attr('data-text-one');

        if ($(this).hasClass('package__block--active')) {
                $(this).next('.note').text(noteTwo);
                $(this).find('.package__text').text(packageText);
            
        }else {
            $(this).next('.note').html(noteOne);
            $(this).closest('.package').find('.package__text').text('Сказочное заморское яство').css('color', '#666666');
        }

    });

   
    $("body").on("click", ".colortext", function(e) {
        e.preventDefault();
        let noteTwo = $(this).closest('.package').find('.note').attr('data-text-one');

        $(this).closest('.package').find('.package__block').toggleClass('package__block--active');

        if ($(this).closest('.package').find(".package__block").hasClass('package__block--active')) { 
            $(this).closest('.package').find('.note').text(noteTwo);
        }
    });

    $("body").on("mouseenter", ".package__block", function() {   

        let packageText = $(this).find(".package__text").attr("data-text");

        if($(this).hasClass('package__block--active')){
            $(this).closest('.package').find('.package__text').text(packageText).css('color', '#d91667');
        }

    });

    $("body").on("mouseleave", ".package__block", function() {

        if($(this).hasClass('package__block--active')){
            $(this).closest('.package').find('.package__text').text('Сказочное заморское яство').css('color', '#666666');
        }

    });
});
 