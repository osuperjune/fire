$(function(){
	$("#submitUserForm").click(function(){
		$("#userForm").form("submit",{
			url:basePath+"user/submitStore",
			onSubmit:function(){
				return $("#userForm").form('validate');
			},
			success:function(r){
				if(r == 1){
					alert("保存成功");
				} else {
					alert("系统异常,操作失败");
				}
			}
		});
	});
});

function changeRole(obj){
	var role = $(obj).val();
	var html;
	$("#dwmcTr").remove();
	$("#frxmTr").remove();
	if(role == 3){
		html = "<tr id='dwmcTr'><td>单位名称</td><td><input type='text' class='easyui-validatebox'";
		html += " data-options='required:true' name='dwmc' style='width: 240px;'></td></tr>";
		html += "<tr id='frxmTr'><td>法人姓名</td><td><input type='text' class='easyui-validatebox'";
		html += " data-options='required:true' name='frxm' style='width: 240px;'></td></tr>";
		$("#userRoleTr").after(html);
	} else if(role == 2){
		html = "<tr id='dwmcTr'><td>单位名称</td><td><select id='department' name='department' style='width: 240px;'></select></td></tr>";
		$("#userRoleTr").after(html);
		var url = basePath + "user/getDepatments";
		$.getJSON(url,function(result){
			var option = "";
		    $.each(result, function(i, data){
		    	option += "<option value='"+data.did+"'>"+data.dwmc+"</option>";
		    });
		    
		    $("#department").html(option);
		});
	}
}