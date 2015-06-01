// JavaScript Document
$(function(){
	$(function() {  
        setInterval("GetTime()", 1000);  
    });  
  
  
});

function GetTime() {  
        var mon, day, now, hour, min, ampm, time, str, tz, end, beg, sec;  
       
        mon = new Array("一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月",  
                "九月", "十月", "十一月", "十二月");  
       
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
       $(".now-time").html(  
                "<nobr>当前时间：" + day[now.getDay()] + ", " + mon[now.getMonth()] + " "  
                        + now.getDate() + "日, " + now.getFullYear() + " " + hour  
                        + ":" + min + ":" + sec + "</nobr>");  
  
    }