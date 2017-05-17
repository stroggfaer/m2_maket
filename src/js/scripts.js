
// Меню раздвижной;
(function ($) {
    // Настройка;
    var content = $('#menu_left'),
        _body = $('body'),
        noScroll = $('_menu_o'),
        menuBtn = $('.js-left-menu'), // Вешаем события клика;
        menuSpeed = 200;// Задержка в мл сек.

    // Установка запрет скролл;
    function toggleBody(){
            if( _body.hasClass(noScroll) ){
                _body.addClass(noScroll);
                animationMenu(true);
                console.log('body -- Open');
            }else{
                _body.removeClass(noScroll);
                animationMenu(false);
                console.log('body -- Close');
            }
    }
    // Открыть слайд;
    function animationMenu(item){
        if(item){
            push.animate({left: "0px"}, menuSpeed);
            console.log('Anim -- Open');
        }else{
            body.removeClass(pushyOpenRight);
            push.animate({right: "0px"}, menuSpeed);
            console.log('Anim --close');
        }
    }
    // События;
    menuBtn.on('click', function(){
        toggleBody();
        console.log('on');
        alert('A');
    });

}(jQuery));
console.log('mobila-- Ok');