$(function () {

/* ===========================
         logo 클릭시 최상단 
=========================== */ 

    $(".logo").on("click", function () {
        $("html,body").stop().animate({
            scrollTop: 0 
        }, 400);
    });

    $(".menu li a[href^='#']").on("click", function () {
        var target = $(this).attr("href")
        var targetPosition = $(target).offset().top;

        $("html,body").animate({
            scrollTop: targetPosition
        }, 800);

        $(".menu li a").removeClass("active");
        $(this).addClass("active"); 
    });

/* ===========================
        모바일 메뉴 보기,가리기
=========================== */ 

    $(".rightmenu li").eq(2).click(function () {
        $(".m_menu").show();
        $(".rightmenu").hide();
        $(".m_menu li").eq(3).show();
    });

    $(".m_menu li").eq(3).click(function () {
        $(".m_menu").hide();
        $(this).hide();
        $(".rightmenu").show();
    });


/* ===========================
        배경 스크롤 이벤트 
=========================== */ 

    
    $(window).scroll(function () {
       
        var scr = $(this).scrollTop();

        $(".center_bg li").eq(0).css({
            "top": -100 + (scr / 2)
        });
        $(".center_bg li").eq(1).css({
            "top": -100 + (scr / 1.7)
        });
        $(".center_bg li").eq(2).css({
            "top": 80 + (scr / 3)
        });
        $(".center_bg li").eq(3).css({
            "top": 60 + (scr / 5)
        });
        $(".center_bg li").eq(4).css({
            "top": 10 + (scr / 5)
        });
        $(".center_bg li").eq(5).css({
            "top": -60 + (scr / 2)
        });

        $(".center_bg li").eq(6).css({
            "transform": "translate(-50%," + (-50 - (scr / 100)) + "%)"
        });

        // hexagon 
        $(".hexagon ").css({
            "transform": "translate(-50%," + (-50 - (scr / 99.5)) + "%)"
        });

        
        $("#redcarpet").css({
            "transform": "translateY(" + (0 - (scr / 2.5)) + "px)"
        });


        $(".port_bg li").eq(0).css({
            "transform": "translateY(" + (0 - (scr / 1.5)) + "px)"
        });
        $(".port_bg li").eq(1).css({
            "transform": "translateY(" + (0 - (scr / 1.5)) + "px)"
        });
        $(".port_bg li").eq(2).css({
            "transform": "translateY(" + (0 - (scr / 2)) + "px)"
        });
        $(".port_bg li").eq(3).css({
            "transform": "translateY(" + (0 - (scr / 4)) + "px)"
        });


/* ===========================
        스크롤 위치가 1630 이상인 경우 추가 스타일 적용 
=========================== */ 

       

        if (scr > 1630) {
            scr -= 1630;
            // redcarpet2의 스크롤에 따른 스타일 변경 
            $("#redcarpet2").css({
                "transform": "translateY(" + (0 - (scr / 2.5)) + "px)"
            });
        }

    })
});

