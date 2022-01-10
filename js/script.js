$(document).ready(function(){
    if($('.main').hasClass('user')){
        $('.main__your__tariff__plan').addClass('visible');
    }else{
        $('.main__your__tariff__plan').removeClass('visible');
    }
    $('#btn').click(function(event){
        $(".last, .last__clr, .last__ul, .last__span").toggleClass('active');
    });
    $('#btn1').click(function(event){
        $(".first__btn, .first__clr, .first__ul, .first__span").toggleClass('active');
    });
    $('#btn2').click(function(event){
        $(".two__btn, .two__clr, .two__ul, .two__span").toggleClass('active');
    });
    $('#btn3').click(function(event){
        $(".three__btn, .three__clr, .three__ul, .three__span").toggleClass('active');
    });
    $('#btn4').click(function(event){
        $(".four__btn, .four__clr, .four__ul, .four__span").toggleClass('active');
    });
    $('#btn5').click(function(event){
        $(".five__btn, .five__clr, .five__ul, .five__span").toggleClass('active');
    });
    $('#btn6').click(function(event){
        $(".six__btn, .six__clr, .six__ul, .six__span").toggleClass('active');
    });
    $('#btn__in__list').click(function(event){
        $(".main__btn-triangle, .main__hide, .main__tv__channels, .main__btn-triangle, .main__btn-span").toggleClass('active');
    });
    $('#dop__btn').click(function(event){
        $(".btn__seven, .seven__clr, .main__prop, .span__seven, .info__first").toggleClass('active');
    });
    $('#dop__btn-2').click(function(event){
        $(".btn__eight, .eight__clr, .main__partners, .span__eight, .info__second").toggleClass('active');
    });
});

