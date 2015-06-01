$(function(){
	$("#selectCompany").click(function(){
		showCompanyDialog();
	});
	
	$("#selectBad").click(function(){
		showBadDialog();
	});
});

function showCompanyDialog(){
	$("#dd").show();
	$("#dd").dialog({
		title:"企业列表",
		modal:true
	});
	$("#dd").dialog("open");
}

function showBadDialog(){
	$("#dd2").show();
	$("#dd2").dialog({
		title:"违法违规事项",
		modal:true,
		buttons:[{
			text:"确定",
			handler:function(){
				alert("ok");
			}
		}]
	});
	$("#dd2").dialog("open");
}