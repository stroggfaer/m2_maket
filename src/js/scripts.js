
// Меню раздвижной;
$(document).ready(function(){
    // Настройка;
    var content = $('#menu_left'),
        _body = $('body'),
        noScroll = '_menu_o',
        push = $('.menu-left-rel'),
        menuBtn = $('.js-left-menu'), // Вешаем события клика;
        menuSpeed = 350;// Задержка в мл сек.

    // Установка запрет скролл;
    function toggleBody(){
        if( _body.hasClass(noScroll) ){
            _body.removeClass(noScroll);
            animationMenu(false);

        }else{
            _body.addClass(noScroll);
            animationMenu(true);

        }
    }
    // Открыть слайд;
    function animationMenu(item){
        if(item){
            push.animate({left: "0px"}, menuSpeed);
            content.show();
        }else{
            push.animate({
                    left: "-270px"
                },
                {
                    duration:  menuSpeed,
                    done: function() {
                        content.hide();
                    },
                }
            );

        }
    }
    // События;
    menuBtn.on('click', function(){
        toggleBody();
        $(this).toggleClass('active');
    });

    // Слайдер;
    $('div.main-slides div.items').owlCarousel({
        //navigation : true, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        lazyEffect: false,
        //autoPlay: 5000,
        navigation:false,
        singleItem:true
    });
    //адаптированный карусель
    $(".owl-carousel").owlCarousel({
        //autoPlay: 3000, //Set AutoPlay to 3 seconds
        items : 8,
        itemsDesktop : [1000,5], //5 items between 1000px and 901px
        itemsDesktopSmall : false, // betweem 900px and 601px
        itemsTablet: false, //2 items between 600 and 0
        itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
    });
    //Слайд партнеры
    $("#owl-parter").owlCarousel({
        autoPlay: 6000, //Set AutoPlay to 3 secon
        singleItem:true,
        //slideSpeed : 300,
        // paginationSpeed : 400,
        pagination: true
    });

    //Слайд партнеры
    $("#owl-parter-cop").owlCarousel({
        autoPlay: 6000, //Set AutoPlay to 3 secon
        singleItem:true,
        //slideSpeed : 300,
        // paginationSpeed : 400,
        pagination: false,
        navigationText : true,
        navigation: true

    });


});
console.log('mobila-- Ok');
console.log('версия jQuery ' + jQuery.fn.jquery);
