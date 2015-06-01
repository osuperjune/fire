$(function(){
	$("#opinionList").datagrid({
		title:"投诉意见列表",
		toolbar:"#tb",
		width:1138,
		height:'auto',
		nowrap:false,
		striped:true,
		url:basePath+"opinion/list",
		pageNumber:1,
		columns:[[
           {field:"jzmc",title:"建筑名称",width:110},
           {field:"gcmc",title:"所属工程",align:"center",width:140,},
           {field:"yjxx",title:"投诉内容",align:"center",width:110},
           {field:"yjrq",title:"投诉日期",align:"center",width:110},
           {field:"yjfj",title:"附件",width:210,formatter:function(value, rowData, rowIndex){
               return '<a href="'+basePath+'opinion/download?coid='+rowData.coid+'">'+rowData.fjmc+'</a>';
           }},
           {field:"yjzt",title:"状态",width:60,formatter:function(value, rowData, rowIndex){
        	   return value==0?"未回复":"已回复";
           }},
           {field:"yjhf",title:"回复内容",align:"left",width:300},
           {field:"coid",title:"操作",align:"center",width:60,formatter:function(value, rowData, rowIndex){
        	   var btn = '<a class="easyui-linkbutton" onclick="answer(\''+rowData.jzmc+'\',\''+rowData.gcmc+'\',\''+rowData.coid+'\')" href="javascript:void(0)">回复</a>';
        	   return btn;
           }},
		]],
		pagination:true,
		rownumbers:true,
		singleSelect:true
	});
	
	$("#searchList").click(function(){
		$("#opinionList").datagrid("load",{
			gcmc:$("#gcmc").val(),
			jzmc:$("#jzmc").val()
		});
	});
});

function answer(jzmc,gcmz,coid){
	$("#answerDialog").show();
	$("#answerDialog").dialog({
		title:"回复意见",
		modal:true,
		top:100,
		buttons:[{
			text:'提交',
			iconCls:'icon-ok',
			handler:function(){
				$.ajax({
					url:basePath+"opinion/answer",
					type:"post",
					dataType:"json",
					data:$("#answerForm").serialize(),
					success:function(d){
						if(d == 1){
							$('#answerDialog').dialog('close');
							$("#jzmc_span").text("");
							$("#gcmc_span").text("");
							$("#coid").val("");
							$("#yjhf").val("");
							$('#opinionList').datagrid("reload",{
								gcmc:$("#gcmc").val(),
								jzmc:$("#jzmc").val()
							});
						} else {
							alert("系统异常操作失败,请重试或联系技术员");
						}
					}
				});
			}},{
				text:'取消',
				handler:function(){
					$('#answerDialog').dialog('close');
				}
			}
		]
	});
	
	$('#answerDialog').dialog("open");
	$("#jzmc_span").text(jzmc);
	$("#gcmc_span").text(gcmz);
	$("#coid").val(coid)
}