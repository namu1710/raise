$(document).ready(function(){
    
    $('.close-btn').click(function(){
        $('.anruf-modal-form').css('display', 'none')
    })

    $('.modal-open').click(function(){
        $('.anruf-modal-form').css('display', 'block')
    })

    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
              }
            }
            
        ]
    })
    
    $('.steps-categories-name-media').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        infinite: false,

        
    })

    $('.mobile-menu').click(function(){
        $(this).toggleClass('mobile-menu-active')
        $('.nav').slideToggle()
    })
   
    $('.step-item2').click(function(){
        $('#step-item2').toggleClass('step-item-active')
        $('.step-item-line1').toggleClass('line-active')
        $('.description-item2').toggleClass('description-active')
        $('.description-item1').toggleClass('description-hidden')
       
    })
    $('.step-item3').click(function(){
        $('#step-item3').toggleClass('step-item-active')
        $('.step-item-line2').toggleClass('line-active')
        $('.description-item3').toggleClass('description-active')
        $('.description-item2').toggleClass('description-hidden')
        
    })
    $('.step-item4').click(function(){
        $('#step-item4').toggleClass('step-item-active')
        $('.step-item-line3').toggleClass('line-active')
        $('.description-item4').toggleClass('description-active')
        $('.description-item3').toggleClass('description-hidden')
  
        
    })

    $('.categories-name-item1').click(function(){
        $(this).toggleClass('name-item-active')
        $('.categories-name-item2').removeClass('name-item-active')
        $('.categories-name-item3').removeClass('name-item-active')
        $('.categories-name-item4').removeClass('name-item-active')
        $('.categories-name-item5').removeClass('name-item-active')
        $('.text-item1').toggleClass('text-item-active')
        $('.text-item2').removeClass('text-item-active')
        $('.text-item3').removeClass('text-item-active')
        $('.text-item4').removeClass('text-item-active')
        $('.text-item5').removeClass('text-item-active')
    })
    $('.categories-name-item2').click(function(){
        $(this).toggleClass('name-item-active')
        $('.categories-name-item1').removeClass('name-item-active')
        $('.categories-name-item3').removeClass('name-item-active')
        $('.categories-name-item4').removeClass('name-item-active')
        $('.categories-name-item5').removeClass('name-item-active')
        $('.text-item2').toggleClass('text-item-active')
        $('.text-item1').removeClass('text-item-active')
        $('.text-item3').removeClass('text-item-active')
        $('.text-item4').removeClass('text-item-active')
        $('.text-item5').removeClass('text-item-active')
    })
    $('.categories-name-item3').click(function(){
        $(this).toggleClass('name-item-active')
        $('.categories-name-item1').removeClass('name-item-active')
        $('.categories-name-item2').removeClass('name-item-active')
        $('.categories-name-item4').removeClass('name-item-active')
        $('.categories-name-item5').removeClass('name-item-active')
        $('.text-item3').toggleClass('text-item-active')
        $('.text-item1').removeClass('text-item-active')
        $('.text-item2').removeClass('text-item-active')
        $('.text-item4').removeClass('text-item-active')
        $('.text-item5').removeClass('text-item-active')
    })
    $('.categories-name-item4').click(function(){
        $(this).toggleClass('name-item-active')
        $('.categories-name-item1').removeClass('name-item-active')
        $('.categories-name-item2').removeClass('name-item-active')
        $('.categories-name-item3').removeClass('name-item-active')
        $('.categories-name-item5').removeClass('name-item-active')
        $('.text-item4').toggleClass('text-item-active')
        $('.text-item1').removeClass('text-item-active')
        $('.text-item2').removeClass('text-item-active')
        $('.text-item3').removeClass('text-item-active')
        $('.text-item5').removeClass('text-item-active')
    })
    $('.categories-name-item5').click(function(){
        $(this).toggleClass('name-item-active')
        $('.categories-name-item1').removeClass('name-item-active')
        $('.categories-name-item2').removeClass('name-item-active')
        $('.categories-name-item3').removeClass('name-item-active')
        $('.categories-name-item4').removeClass('name-item-active')
        $('.text-item5').toggleClass('text-item-active')
        $('.text-item1').removeClass('text-item-active')
        $('.text-item2').removeClass('text-item-active')
        $('.text-item3').removeClass('text-item-active')
        $('.text-item4').removeClass('text-item-active')
    })

    $('#promo-item1').click(function(){
        $(this).toggleClass('name-item-active')
        $('#promo-item2').removeClass('name-item-active')
        $('#promo-item3').removeClass('name-item-active')
        $('.promo-text-item1').toggleClass('text-item-active')
        $('.promo-text-item2').removeClass('text-item-active')
        $('.promo-text-item3').removeClass('text-item-active')
    })
    $('#promo-item2').click(function(){
        $(this).toggleClass('name-item-active')
        $('#promo-item1').removeClass('name-item-active')
        $('#promo-item3').removeClass('name-item-active')
        $('.promo-text-item2').toggleClass('text-item-active')
        $('.promo-text-item1').removeClass('text-item-active')
        $('.promo-text-item3').removeClass('text-item-active')
    })
    $('#promo-item3').click(function(){
        $(this).toggleClass('name-item-active')
        $('#promo-item1').removeClass('name-item-active')
        $('#promo-item2').removeClass('name-item-active')
        $('.promo-text-item3').toggleClass('text-item-active')
        $('.promo-text-item1').removeClass('text-item-active')
        $('.promo-text-item2').removeClass('text-item-active')
    })

})