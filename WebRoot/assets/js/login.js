
$(function(){
	$("#submitLogin").click(function(){
		var data = $("#loginForm").serialize();
		$.ajax({
			url:basePath+"login",
			type:"post",
			dataType:"json",
			data:data,
			success:function(r){
				if(r.r == "1"){
					window.location.href = basePath+"index";
				} else {
					alert(r.e);
				}
			}
		});
	});
	
});
function complain(){
	$("input[type='file']").val("");
	$("#dd").show();
	$("#dd").dialog({
		title:"投诉",
		modal:true
	});
	$("#dd").dialog("open");
}
function findProject(){
	$("#projectList").datagrid({
		toolbar:"#tb",
		width:'100%',
		height:261,
		nowrap:false,
		striped:true,
		url:basePath+"project/findProject",
		pageNumber:1,
		columns:[[
           {field:"ck",title:"",width:40,formatter: function(value, rowData, rowIndex){
               return '<input type="radio" name="selectRadio" id="selectRadio"' + rowIndex + '    value="' + rowData.jzmc + '#' +rowData.pid+'" />';
           }},
           {field:"gcmc",title:"工程名称",width:190},
           {field:"dwmc",title:"所属单位",align:"center",width:140,},
           {field:"jzmc",title:"建筑名称",align:"center",width:180}
		]],
		pagination:true,
		rownumbers:true,
		singleSelect:true
	});
	
	$("#project").show();
	$("#project").dialog({
		title:"工程信息列表",
		modal:true
	});
	$("#project").dialog("open");
	$("#qy").val("");
	$("#jzmc").val("");
}

function queryProject(){
	$("#projectList").datagrid("load",{
		qy:$("#qy").val(),
		jzmc:$("#jzmc").val()
	});
}

function selectProject(){
	var projectName = $("input[name='selectRadio']:checked").val();
	$("#projectName").val(projectName.substring(0,projectName.indexOf("#")));
	$("#projectId").val(projectName.substring(projectName.indexOf("#")+1));
	$("#project").dialog("close");
}

function submitOpinion(){
	if($.trim($("#projectName").val()).length < 1){
		$("#checkProject").html("工程名称不能为空");
		return;
	}
	
	if($.trim($("#yjxx").val()).length < 1){
		$("#checkContent").html("投诉内容不能为空");
		return;
	}
	
	if($.trim($("#yjxx").val()).length < 30){
		$("#checkContent").html("投诉内容字数不得少于30个字");
		return;
	}
	
	if($.trim($("#yjxx").val()).length > 300){
		$("#checkContent").html("投诉内容字数不得多于30个字");
		return;
	}
	
	$("#opinionForm").form("submit",{
		url:basePath+"opinion/storeOpinion",
		success:function(data){
			if(data == 1){
				$("#dd").dialog("close");
			} else {
				alert("系统异常请联系管理员或重试");
			}
			
		}
	});
	
	$("#checkProject").html("");
	$("#checkContent").html("");
	$("#projectName").val("");
	$("#yjxx").val("");
	$("#pid").val("");
	$("input[type='file']").val("");
}