$(".cloth_wrap").eq(0).css({display:"flex"});
$(".tap_menu span").eq(0).addClass("on");

$(".tap_menu span").click(function(){
$(".tap_menu span").removeClass("on");
$(this).addClass("on");
const k=$(this).index();
$(".cloth_wrap").css({display:"none"});
$(".cloth_wrap").eq(k).css({display:"flex"});
});

