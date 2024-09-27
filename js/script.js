$(".sub, .subbg").hide()
$(".menu>li").mouseover(function(){
 $(".sub, .subbg").show()
})
$(".menu>li").mouseout(function(){
 $(".sub, .subbg").hide()
})

$(".m_nav").hide()
$(".m_btn").click(function(){
 $(".m_nav").show()
 $(".m_menuwrap").animate({right:"0"},500)
})
$(".m_close").click(function(){
 $(".m_nav").fadeOut(500)
 $(".m_menuwrap").animate({right:"-310px"},500)
})

$(".m_navbg").click(function(){
 $(".m_nav").fadeOut(500)
 $(".m_menuwrap").animate({right:"-310px"},500)
})

$(".m_sub").hide()
$(".m_menu>li").click(function(){
 $(this).children(".m_sub").slideToggle(500)
 $(this).siblings().children(".m_sub").slideUp(500)
 $(this).toggleClass("active")
 $(this).siblings().removeClass("active")
})
/* 자손은 find */

/* main slide */
const main=new Swiper('.main>.swiper',{
 navigation: {
  nextEl:".main_next",
  prevEl:".main_prev",
 },
 loop:true, //슬라이드 순환
 autoplay:{delay:2500,disableOnInteraction:false},
 pagination:{el:'.main .swiper-pagination', clickable:true},
})//main swiper end

/* main slide 재생 - 일시정지 구현 */
$(".main_pause").click(function(){
 $(".main_pause").hide()
 $(".main_play").show()
 main.autoplay.pause();
})
$(".main_play").click(function(){
 $(".main_play").hide()
 $(".main_pause").show()
 main.autoplay.start()
})

/* box1 slide */
const box1=new Swiper('.box1>.swiper',{
 loop:true,
 autoplay:{delay:2500, disableOnInteraction:false},
 navigation:{
  prevEl:".box1_prev",
  nextEl:".box1_next"
 },
 pagination:{el:".box1 .swiper-pagination",
  clickable:true,
  type:'fraction',}//불렛이 아니라 숫자로 보여짐
})

/* box1 playbtn */
$(".box1_pause").click(function(){
 $(".box1_pause").hide()
 $(".box1_play").show()
 box1.autoplay.pause()
})
$(".box1_play").click(function(){
 $(".box1_play").hide()
 $(".box1_pause").show()
 box1.autoplay.start()
})

/* box5 tab */
$(".notice2").hide()
$(".tabtitle>li:nth-child(1)").click(function(){
  $(this).addClass("tabactive")
  $(this).siblings().removeClass("tabactive")
  $(".notice1").show()
  $(".notice2").hide()
})
$(".tabtitle>li:nth-child(2)").click(function(){
  $(this).addClass("tabactive")
  $(this).siblings().removeClass("tabactive")
  $(".notice2").show()
  $(".notice1").hide()
})