setInterval("GetTime()", 1000);
$(function(){
	$("#tabs").tabs({
		fit:true,
		border:false
	});
	
	$("#menu").accordion({
		fit:true,
		border:false
	});
	
	$(".panel-title").each(function(){
		if($(this).html()=="功能菜单"){
			$(this).hide();
			$(this).parent().css("background","url(assets/images/leftmenu/side_top.gif)");
		}
	});
	
	$("#logout").click(function(){
		window.location.href = basePath + "logout";
	});
	 
});

function jumpto(title,url,obj){
	$(".on").removeClass("on");
	$(obj).addClass("on");
	if ($("#tabs").tabs("exists", title)){
		$("#tabs").tabs("select", title);
	} else {
		var content = "<iframe  scrolling='no' frameborder='0'  src='"+url+"' style='width:100%;height:99%;'></iframe>";
		$("#tabs").tabs("add",{
			title:title,
			content:content,
			closable:true
		});
	}
}

function GetTime() {  
        var mon, day, now, hour, min, ampm, time, str, tz, end, beg, sec;  
       
        mon = new Array("1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月",  
                "9月", "10月", "11月", "12月");  
       
        day = new Array("周日", "周一", "周二", "周三", "周四", "周五", "周六");  
        now = new Date();  
        hour = now.getHours();  
        min = now.getMinutes();  
        sec = now.getSeconds();  
        if (hour < 10) {  
            hour = "0" + hour;  
        }  
        if (min < 10) {  
            min = "0" + min;  
        }  
        if (sec < 10) {  
            sec = "0" + sec;  
        }  
       $(".nowtime").html(  
                "<nobr>当前时间：" + day[now.getDay()] + "," +now.getFullYear()+"年"+ mon[now.getMonth()]
                        + now.getDate() + "日," + hour  
                        + ":" + min + ":" + sec + "</nobr>");  
  
    }