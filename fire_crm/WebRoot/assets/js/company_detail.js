$(function(){
	$("#companyDetailTab").tabs({
		border:false,
		fit:true,
		onSelect:function(){
			localSearch();
		}
	});
});

function localSearch(){
	var loseCaseTab = $("#companyDetailTab");
	var selectedTab = loseCaseTab.tabs("getSelected");
	var targetIframe = selectedTab.find("iframe");
	if(targetIframe.length == 0){
		var id = selectedTab.attr("id");
		if(id == "base"){
			selectedTab.append("<iframe id='baseFrame' style='width: 100%;height: 99%;' frameborder='0'></iframe>");
			$("#baseFrame").attr("src","pager/company/company_detail_base.html");
		} else if(id == "exam"){
			selectedTab.append("<iframe id='examFrame' style='width: 100%;height: 99%;' frameborder='0'></iframe>");
			$("#examFrame").attr("src","pager/company/company_detail_exam.html");
		} else if(id == "project"){
			selectedTab.append("<iframe id='projectFrame' style='width: 100%;height: 99%;' frameborder='0'></iframe>");
			$("#projectFrame").attr("src","pager/company/company_detail_project.html");
		} else if(id == "bad"){
			selectedTab.append("<iframe id='badFrame' style='width: 100%;height: 99%;' frameborder='0'></iframe>");
			$("#badFrame").attr("src","pager/company/company_detail_bad.html");
		} else if(id == "change"){
			selectedTab.append("<iframe id='changeFrame' style='width: 100%;height: 99%;' frameborder='0'></iframe>");
			$("#changeFrame").attr("src","pager/company/company_detail_change.html");
		}
	}
}