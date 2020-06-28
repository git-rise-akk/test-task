$(document).ready(() => {
    
    $(".package__block").on("click", function(e) {

        if ($(this).hasClass('package__block--disabled')) {
            null
        }else {
            $(this).toggleClass('package__block--active')
        }
       
        let noteOne = ' <div class="noteTow"> Чего сидишь? Порадуй котэ, <a href="#" class="colortext">купи.</a> </div>';
        let noteTwo = $(this).closest('.package').find('.note').attr('data-text-one');
        let packageText = $(this).find(".package__text").attr("data-text");

        if ($(this).hasClass('package__block--active') === true ) {
            $(this).next('.note').text(noteTwo);
            $(this).find('.package__text').text(packageText);
        }else {
            $(this).next('.note').html(noteOne);
            $(this).find('.package__text').text('Сказочное заморское яство');
        }

        if ($(this).hasClass('package__block--disabled') === true ) {
            $(this).next('.note').text('Печалька, с курой закончился.').css("color", "#ffff66");
        }

    });

   
    $("body").on("click", ".colortext", function(e) {
        e.preventDefault();

        $(this).closest('.package').find('.package__block').toggleClass('package__block--active')

        let noteOne = ' <div class="noteTow"> Чего сидишь? Порадуй котэ, <a href="#" class="colortext">купи.</a> </div>';
        let noteTwo = $(".package").find('.note').attr('data-text-one');
        let packageText = $(".package").find(".package__text").attr("data-text");


        if ($(this).closest('.package').find(".package__block").hasClass('package__block--active') === true ) { 
            $(this).closest('.package').find('.package__text').text(packageText);
            $(this).closest('.package').find('.note').text(noteTwo);
        }else {
            $(this).closest('.package').find('.package__text').text('Сказочное заморское яство');
        }
    });

    $(".package__block--disabled").closest('.package').find('.note').css("color", "#ffff66");

});
 