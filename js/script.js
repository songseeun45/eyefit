$(function(){

    $(document).mousemove(function(e){

        $(".custom_cursor").css({
            left: e.clientX,
            top: e.clientY
        });

    });

});


$(function(){//이미지 변경 함수 호출
    	$(".best_G").mouseenter(function(){
            $(".best_G").attr("src", "images/best_seller/gray_S.jpg");//변경될 이미지 주소를 넣어주세요
        });
        $(".best_G").mouseleave(function(){
            $(".best_G").attr("src", "images/best_seller/softly_G.jpg");//변경될 이미지 주소를 넣어주세요
        });

        $(".best_B").mouseenter(function(){
            $(".best_B").attr("src", "images/best_seller/brown_S.jpg");//변경될 이미지 주소를 넣어주세요
        });
        $(".best_B").mouseleave(function(){
            $(".best_B").attr("src", "images/best_seller/softly_B.jpg");//변경될 이미지 주소를 넣어주세요
        });

        $(".best_BB").mouseenter(function(){
            $(".best_BB").attr("src", "images/best_seller/brown_B.jpg");//변경될 이미지 주소를 넣어주세요
        });
        $(".best_BB").mouseleave(function(){
            $(".best_BB").attr("src", "images/best_seller/Barely_B.jpg");//변경될 이미지 주소를 넣어주세요
        });
    });
    
$(function () {
    $(".tab li").click(function (e) {
        e.preventDefault();

        let i = $(this).index();

        $(".tab li").removeClass("on");
        $(this).addClass("on");

        $(".card_list").css(
            "transform",
            "translateX(-" + (i * 523) + "px)"
        );
    });
});

$(document).ready(function () {

    $(".question").click(function () {

        $(this).next(".answer").slideToggle();

        $(this).parent().toggleClass("turn");

    });

});

$(window).scroll(function(){

    $(".scroll_down, .scroll_up").each(function(){

        var scroll = $(window).scrollTop();
        var position = $(this).offset().top;
        var height = $(window).height();

        if(scroll + height > position + 100){
            $(this).addClass("on");
        }

    });

});

$(function(){

    $("#top_btn").click(function(){

        $("html, body").animate({
            scrollTop: 0
        }, 1000);

    });
    

});

