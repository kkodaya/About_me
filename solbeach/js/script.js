$(".menu").click(function(){
    $(".nav").stop().animate({left:0}, 200);
});

$(".btn_close").click(function(){
    $(".nav").stop().animate({left:"-100%"}, 200);
    $(".sub").stop().slideUp();
    $(".gnb_tit").removeClass("on")
    return false;
})

// $(".gnb_tit").click(function(){
//     $(".lnb").stop().slideUp();
//     $(this).next().stop().slideDown();
//     $(".gnb_tit").removeClass("on");
//     $(this).addClass("on");
// });

$(".gnb_tit").click(function(){ 
    //클릭이 되있는 상태라면 on을 없애고 lnb를 올리고 색깔은 검은색
    //클릭이 안되있는 상태라면 다른곳에 on이 있을경우를 대비 전부 on을 없애고 this-tit에 on부여 lnb는 마찬가지로 전부 올리고 
    //this next( HTML- title 밑에 lnb작성) -lnb에 슬라이드 다운  color를 전부 회색으로 바꾼뒤(클릭안된 타이틀 color ) 
    //this -tit color 검은색으로 변경

    if($(this).hasClass("on")==true){
        $(".gnb_tit").removeClass("on");
        $(".lnb").stop().slideUp(200);
        $(".gnb_tit").css({color:"#1C1C1E"});
    }else{
       $(".gnb_tit").removeClass("on");
        $(this).addClass("on");
        $(".lnb").stop().slideUp(200);
        $(this).next().stop().slideDown(200);
        $(".gnb_tit").css({"color":"#9a9a9a"});
        $(this).css({color:"#1C1C1E"});
        
    };
});
//룸 탭메뉴에 밑줄 
$(".sec1 .room_wrap li").eq(0).addClass("on")
$(".sec1 .room_wrap li").click(function(){
    $(".sec1 .room_wrap li").removeClass("on");
    $(this).addClass("on");
});

//탭메뉴 li의 인덱스 번호 변수지정후 객실사진을 eq(변수)로 불러오기
$(".room_img_tab").eq(0).show();
$(".room_tab .room_wrap li").click(function(){
    let k = $(this).index();
    $(".room_img_tab").hide();
    $(".room_img_tab").eq(k).show();

    return false;
});


$(function() {
    var dpForm=$( "#ch_in" ).datepicker({
        dateFormat:"yy-mm-dd",
        dayNamesMIn:["일","월","화","수","목","금","토"],
    });
    dpForm.datepicker("setDate" ,new Date());


    var dpTo=$("#ch_out").datepicker({
        dateFormat:"yy-mm-dd",
        dayNamesMIn:["일","월","화","수","목","금","토"],
    });
    dpTo.datepicker("setDate", 7)
  } );

  
 
   

 


   