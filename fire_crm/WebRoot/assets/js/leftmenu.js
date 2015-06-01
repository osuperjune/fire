// JavaScript Document
$(function(){
      $(".sideMenu").slide({
         titCell:"h3", 
         targetCell:"ul",
         defaultIndex:0, 
         effect:"slideDown", 
         delayTime:"500" , 
         trigger:"click", 
         triggerTime:"500", 
         defaultPlay:true, 
         returnDefault:false,
         easing:"swing",
         endFun:function(){
		 //alert(Index);
              scrollWW();
         }
       });
      $(window).resize(function() {
          scrollWW();
      });
	  
	
  });
  function scrollWW(){
  
    if($(".side").height()<$(".sideMenu").height()){
       $(".scroll").show();
       var pos = $(".sideMenu ul:visible").position().top;
    }else{
       $(".scroll").hide();
       $(".sideMenu").animate({top:0});
       n=1;
    }
  } 
  function menuScroll(num){
  //alert(num);
  var Scroll = $(".sideMenu");
  var ScrollP = $(".sideMenu").position();
  /*alert(n);
  alert(ScrollP.top);*/
  if(num==1){
     Scroll.animate({top:ScrollP.top-80});
     n = n+1;
  }else{
    if (ScrollP.top > -80 && ScrollP.top != 0) { ScrollP.top = -80; }
    if (ScrollP.top<0) {
      Scroll.animate({top:80+ScrollP.top});
    }else{
      n=1;
    }
    if(n>1){
      n = n-1;
    }
  }
}

function openMain(url,obj){
	$(window.parent.document).find("#mainFrame").attr("src",url);
	$(".sideMenu").find("ul li").each(function(){
		$(this).removeClass("on");
		
	})
	
	$(obj).addClass("on");
    	
}