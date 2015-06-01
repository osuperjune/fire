$(function(){
	$("#addBadInfo").click(function(){
		jumpto("不良行为信息","pager/bad/bad_add.html");
	});
});

function jumpto(title,url){
	var jq = top.jQuery;
	if (jq("#tabs").tabs("exists", title)){
		jq("#tabs").tabs("select", title);
	} else {
		var content = "<iframe frameborder='0' src='"+url+"' style='width:100%;height:99%;'></iframe>";
		jq("#tabs").tabs("add",{
			title:title,
			content:content,
			closable:true
		});
	}
}