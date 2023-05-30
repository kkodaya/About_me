
$(".nav_gnb .gnb_main:eq(0)").find(".gnb_sub").css({display:"block"});
$(".nav_gnb .gnb_main:eq(0)").find(".gnb_tit").css({color:"#32fc97"})

$(".nav_gnb .gnb_tit").click(function(){
$(".nav_gnb .gnb_main .gnb_sub").css({display:"none"});
$(".gnb_tit").css({color:"#181818"})
$(this).css({color:"#32fc97"})
$(this).next(".gnb_sub").css({display:"block"});

  
});
    $(".header_wrap .menu").click(function(){  
        $("#nav").show(10).css({transform:"translateX(0)"})
      
});
    $(".nav_cancle").click(function(){
        $("#nav").css({transform:"translateX(100%)"})
    });

    $(".cloth_wrap").eq(0).show();
    $(".tap_menu span").eq(0).addClass("on");
    $(".tap_menu span").click(function(){
        $(".tap_menu span").removeClass("on");
        $(this).addClass("on");
        const k=$(this).index();
        $(".cloth_wrap").hide();
        $(".cloth_wrap").eq(k).show();
    });
   
    document.querySelector('.button1').addEventListener('click' , function(){
        document.querySelector('.visual_container').style.transform = 'translate(0vw)';
        document.querySelectorAll('.visual_button button').style.background = '#38bacd';
        document.querySelector('.button1').stlye.background = '#b4289a';
    });   
    document.querySelector('.button2').addEventListener('click' , function(){
        document.querySelector('.visual_container').style.transform = 'translate(-100vw)';
        document.querySelectorAll('.visual_button button').style.background = '#38bacd';
        document.querySelector('.button2').stlye.background = '#b4289a';
    });
    document.querySelector('.button3').addEventListener('click' , function(){
        document.querySelector('.visual_container').style.transform = 'translate(-200vw)';
        document.querySelectorAll('.visual_button button').style.background = '#38bacd';
        document.querySelector('.button3').stlye.background = '#b4289a';
    });