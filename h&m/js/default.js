$(".menu_open").click(function(){
$(".nav").css({transform:"translateX(0)"});
});
// 네비 open

$(".menu_close").click(function(){
 $(".nav").css({transform:"translateX(100%)"});
 });
// 네비 off


$(window).scroll(function(){
var top=$(document).scrollTop();
console.log(top);


if(top>=450){
    $(".sec2").fadeIn(2500)

}


});