
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
});
console.log('mobila-- Ok');
console.log('версия jQuery ' + jQuery.fn.jquery);
