 
 $(document).ready(function(){
    $("#visual .pub").addClass("on2");
    $("#visual .gb").addClass("first");
    $("#visual .gbb").addClass("second");
    $("#visual .gbbb").addClass("three");
    $(".visual_txt_bg").addClass("five");
    $(".gnb li:nth-child(1)").css({color:"#d93fff"});
    $("#header").css({background:"rgba(0,0,0,0)"});
    $("body,html").stop().animate({"scrollTop":0},1500,"swing");
    
    
 })
 
 $(function(){
                $(window).scroll(function(){
                  var top=$(document).scrollTop(); /*변수저장*/
                  console.log(top);
                
                //   능력치 바 상승
                  if(top>=1200 && top<2000){
                    $("li .photo_bar").stop().animate({width:"75%"});
                    $("li .liru_bar").stop().animate({width:"70%"});
                    $("li .hc_bar").stop().animate({width:"85%"});
                    $("li .js_bar").stop().animate({width:"75%"});
                    }else{
                        $("li .bar").stop().animate({width:0});
                    }

                //   포토폴리오 감사인사  
                    if(top>=4600){
                        $(".sec5 h4").addClass("on");
                    }else{
                        $(".sec5 h4").removeClass("on");
                    }

                //   비쥬얼 소개말 움직임
                    if(top=>0 && top<350){                       
                        $("#visual .gb").addClass("first");
                        $("#visual .gbb").addClass("second");
                        $("#visual .pub").addClass("on2");
                        $("#visual .gbbb").addClass("three");
                        $("#header").css({background:"none"});
                    }else{                      
                        $("#visual .gb").removeClass("first");
                        $("#visual .gbb").removeClass("second");
                        $("#visual .pub").removeClass("on2");
                        $("#visual .gbbb").removeClass("three");                      
                    }
                //    헤더부분 백그라운드
                    if(top>350){
                        $("#header").css({background:"rgba(0,0,0,0.3)"});
                    }      
                //    프로필 좌우 합쳐지기
                    if(top>=650 && top<1650){
                        $(".sec1 .left_img").css({transform:"translateX(0)"});
                        $(".sec1 .right_txt").css({transform:"translateX(0)"});
                    }else{
                        $(".sec1 .left_img").css({transform:"translateX(-160%)"});
                        $(".sec1 .right_txt").css({transform:"translateX(150%)"});
                    }
                //    최상단으로 가기 TOP버튼  
                    if(top>=1000 && top<4800){
                        $(".top_btn").addClass("on3");
                    }else{
                        $(".top_btn").removeClass("on3")
                    }
                //    네비게이션 섹션에 맞춰 색상변경
                    if(top>=0 && top<1000){
                        $(".gnb li:nth-child(1)").css({color:"#d93fff"});
                    }else{
                        $(".gnb li:nth-child(1)").css({color:"#fff"});
                    }
                   
                    if(top>=1000 && top<2400){
                    $(".gnb li:nth-child(2)").css({color:"#d93fff"});
                    }else{
                        $(".gnb li:nth-child(2)").css({color:"#fff"});
                    }
                    if(top>=2400 && top<3600){
                        $(".gnb li:nth-child(3)").css({color:"#d93fff"});
                        }else{
                            $(".gnb li:nth-child(3)").css({color:"#fff"});
                        }
                     if(top>=3600){
                     $(".gnb li:nth-child(4)").css({color:"#d93fff"});
                      }else{
                        $(".gnb li:nth-child(4)").css({color:"#fff"});
                        }

                //   탑버튼 누를시 최상단이동
                }) 
                $(".top_btn").click(function(){
                    $("html,body").stop().animate({scrollTop:0});
                });
                //    네비게이션 클릭시 스크롤탑 지정 섹션으로 이동
                $(".gnb li:nth-child(1)").click(function(){
                    $("html,body").stop().animate({scrollTop:0});
                });
                $(".gnb li:nth-child(2)").click(function(){
                    $("html,body").stop().animate({scrollTop:1000});
                });
                $(".gnb li:nth-child(3)").click(function(){
                    $("html,body").stop().animate({scrollTop:2700});
                });
                $(".gnb li:nth-child(4)").click(function(){
                    $("html,body").stop().animate({scrollTop:3800});
                });
            })
            
            //    그래픽섹션 이미지클릭시 오버레이 나오게하기

            $(document).ready(function(){
                $(".gra_img li>img").click(function(){
                    $(this).next().show(); //img 다음형제 overlay
                    $("#header").css({opacity:"0"})
                    $(".top_btn").css({opacity:"0"})
                    $("body").css({overflow:"hidden"})
                    return false;
                });
                $(".btn_close").click(function(){
                    $(".overlay").hide();
                    $("#header").css({opacity:"1"})
                    $(".top_btn").css({opacity:"1"})
                    $("body").css({overflow:"auto"})
                    return false;
                });

            });
           
            //    휴대폰이미지 안에 맞는 iframe 넣기
           
            $(".mob").click(function(e){
                e.preventDefault();
                //let n=$(this).parents("li").index();
                let n=$(this).attr("data-num");
                console.log(n);
                $(".overlay_wrap .overlay1").eq(n).show();
                $("body").css({overflow:"hidden"});
                return false;
            });
          
            //    휴대폰이미지 안 iframe 종료
            $(".mob_close").click(function(e){
                e.preventDefault();
                $(".cl .overlay1").hide();
                $("body").css({overflow:"auto"});
                return false;
            });