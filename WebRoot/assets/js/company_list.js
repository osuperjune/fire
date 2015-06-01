$(function() {
	$("#tt").datagrid({
		title : "企业信息列表",
		width : "auto",
		height : "auto",
		striped: true,
		collapsible:true,
		singleSelect : true,
		fitColumns : false,
		frozenColumns:[[
						{field : "status",title : "状态"},
						{field : "companyname",title : "单位名称"}
		              ]],
		columns : [ [
		             {field : "oktime",title : "批准时间"},
		             {field : "attr1",title : "法定代表人"},
		             {
			field : "attr2",
			title : "联系电话",
			align : "center"
		}, {
			field : "attr3",
			title : "法定代表人联系电话",
			align : "center"
		}, {
			field : "attr4",
			title : "注册地",
			align : "center"
		}, {
			field : "attr5",
			title : "尚未取得消防资质认证",
			align : "center"
		}, {
			field : "attr6",
			title : "建设工程设计单位资质等级",
			align : "center"
		}, {
			field : "attr7",
			title : "建筑业企业资质等级",
			align : "center"
		}, {
			field : "attr8",
			title : "设计施工一体化等级",
			align : "center"
		}, {
			field : "attr9",
			title : "监理企业资质等级",
			align : "center"
		}, {
			field : "attr10",
			title : "消防技术服务资质等级",
			align : "center"
		}, {
			field : "attr11",
			title : "消防专业考试合格人员数量",
			align : "center"
		}] ],
		pagination:true,
		rownumbers:true,
		onHeaderContextMenu : function(e, field) {
			e.preventDefault();
			if (!$("#tmenu").length) {
				createColumnMenu();
			}
			$("#tmenu").menu("show", {
				left : e.pageX,
				top : e.pageY
			});
		},
		onDblClickRow:function(rowNum,record){
			jumpto("企业详情","pager/company/company_detail.html");
		}
	});

	var obj = {
		"total" : 12,
		"rows" : [
		   {
			status:"已批准",companyname:"重庆正平水利水电工程质量检测有限公司",oktime:"2005-09-12",attr1:"张三",
			attr2:"023-56651124",attr3:"18223506256",attr4:"重庆市沙坪坝区西永",attr5:"未取得",attr6:"设计专项甲级",
			attr7:"消防设施工程专业承包二级",attr8:"消防设施设计施工一级",attr9:"专业资质甲级",attr10:"消防设施检测维护一级",attr11:"5"
		   },
		   {
			status:"已批准",companyname:"重庆安能建设有限公司",oktime:"2005-09-12",attr1:"张三",
			attr2:"023-56651124",attr3:"18223506256",attr4:"重庆市沙坪坝区西永",attr5:"未取得",attr6:"设计专项甲级",
			attr7:"消防设施工程专业承包二级",attr8:"消防设施设计施工一级",attr9:"专业资质甲级",attr10:"消防设施检测维护一级",attr11:"5"
		   },
		   {
			status:"已批准",companyname:"重庆安能建设有限公司",oktime:"2005-09-12",attr1:"张三",
			attr2:"023-56651124",attr3:"18223506256",attr4:"重庆市沙坪坝区西永",attr5:"未取得",attr6:"设计专项甲级",
			attr7:"消防设施工程专业承包二级",attr8:"消防设施设计施工一级",attr9:"专业资质甲级",attr10:"消防设施检测维护一级",attr11:"5"
		   },
		   {
			status:"已批准",companyname:"重庆安能建设有限公司",oktime:"2005-09-12",attr1:"张三",
			attr2:"023-56651124",attr3:"18223506256",attr4:"重庆市沙坪坝区西永",attr5:"未取得",attr6:"设计专项甲级",
			attr7:"消防设施工程专业承包二级",attr8:"消防设施设计施工一级",attr9:"专业资质甲级",attr10:"消防设施检测维护一级",attr11:"5"
		   },
		   {
			status:"已批准",companyname:"重庆安能建设有限公司",oktime:"2005-09-12",attr1:"张三",
			attr2:"023-56651124",attr3:"18223506256",attr4:"重庆市沙坪坝区西永",attr5:"未取得",attr6:"设计专项甲级",
			attr7:"消防设施工程专业承包二级",attr8:"消防设施设计施工一级",attr9:"专业资质甲级",attr10:"消防设施检测维护一级",attr11:"5"
		   },
		   {
			status:"已批准",companyname:"重庆安能建设有限公司",oktime:"2005-09-12",attr1:"张三",
			attr2:"023-56651124",attr3:"18223506256",attr4:"重庆市沙坪坝区西永",attr5:"未取得",attr6:"设计专项甲级",
			attr7:"消防设施工程专业承包二级",attr8:"消防设施设计施工一级",attr9:"专业资质甲级",attr10:"消防设施检测维护一级",attr11:"5"
		   },
		   {
			status:"已批准",companyname:"重庆安能建设有限公司",oktime:"2005-09-12",attr1:"张三",
			attr2:"023-56651124",attr3:"18223506256",attr4:"重庆市沙坪坝区西永",attr5:"未取得",attr6:"设计专项甲级",
			attr7:"消防设施工程专业承包二级",attr8:"消防设施设计施工一级",attr9:"专业资质甲级",attr10:"消防设施检测维护一级",attr11:"5"
		   },
		   {
			status:"已批准",companyname:"重庆安能建设有限公司",oktime:"2005-09-12",attr1:"张三",
			attr2:"023-56651124",attr3:"18223506256",attr4:"重庆市沙坪坝区西永",attr5:"未取得",attr6:"设计专项甲级",
			attr7:"消防设施工程专业承包二级",attr8:"消防设施设计施工一级",attr9:"专业资质甲级",attr10:"消防设施检测维护一级",attr11:"5"
		   },
		   {
			status:"已批准",companyname:"重庆安能建设有限公司",oktime:"2005-09-12",attr1:"张三",
			attr2:"023-56651124",attr3:"18223506256",attr4:"重庆市沙坪坝区西永",attr5:"未取得",attr6:"设计专项甲级",
			attr7:"消防设施工程专业承包二级",attr8:"消防设施设计施工一级",attr9:"专业资质甲级",attr10:"消防设施检测维护一级",attr11:"5"
		   },
		   {
			status:"已批准",companyname:"重庆安能建设有限公司",oktime:"2005-09-12",attr1:"张三",
			attr2:"023-56651124",attr3:"18223506256",attr4:"重庆市沙坪坝区西永",attr5:"未取得",attr6:"设计专项甲级",
			attr7:"消防设施工程专业承包二级",attr8:"消防设施设计施工一级",attr9:"专业资质甲级",attr10:"消防设施检测维护一级",attr11:"5"
		   },
		   {
			status:"已批准",companyname:"重庆安能建设有限公司",oktime:"2005-09-12",attr1:"张三",
			attr2:"023-56651124",attr3:"18223506256",attr4:"重庆市沙坪坝区西永",attr5:"未取得",attr6:"设计专项甲级",
			attr7:"消防设施工程专业承包二级",attr8:"消防设施设计施工一级",attr9:"专业资质甲级",attr10:"消防设施检测维护一级",attr11:"5"
		   },
		   {
			status:"已批准",companyname:"重庆安能建设有限公司",oktime:"2005-09-12",attr1:"张三",
			attr2:"023-56651124",attr3:"18223506256",attr4:"重庆市沙坪坝区西永",attr5:"未取得",attr6:"设计专项甲级",
			attr7:"消防设施工程专业承包二级",attr8:"消防设施设计施工一级",attr9:"专业资质甲级",attr10:"消防设施检测维护一级",attr11:"5"
		   }
		]
	};
	$("#tt").datagrid("loadData",obj);
	
	$("#search").click(function(){
		showDialog();
	});
	
	$("#showDetail").click(function(){
		jumpto("企业详情","pager/company/company_detail.html");
	});
});

function jumpto(title,url){
	var jq = top.jQuery;
	if (jq("#tabs").tabs("exists", title)){
		jq("#tabs").tabs("select", title);
	} else {
		var content = "<iframe  scrolling="no" frameborder="0"  src=""+url+"" style="width:100%;height:99%;"></iframe>";
		jq("#tabs").tabs("add",{
			title:title,
			content:content,
			closable:true
		});
	}
}

function showDialog(){
	$("#dd").show();
	$("#dd").dialog({
		title:"查询条件",
		modal:true,
		buttons:[{
			text:"清楚查询条件",
			handler:function(){
				alert("ok");
			}
		},{
			text:"查询",
			handler:function(){
				$("#dd").dialog("close");
			}
		},{
			text:"返回",
			handler:function(){
				$("#dd").dialog("close");
			}
		}]
	});
	$("#dd").dialog("open");
}

function createColumnMenu() {
	var tmenu = $("<div id="tmenu" style="width:100px;"></div>").appendTo(
			"body");
	var fields = $("#tt").datagrid("getColumnFields");
	for ( var i = 0; i < fields.length; i++) {
		$("<div iconCls="icon-ok"></fields>").html(fields[i]).appendTo(tmenu);
	}
	tmenu.menu({
		onClick : function(item) {
			if (item.iconCls == "icon-ok") {
				$("#tt").datagrid("hideColumn", item.text);
				tmenu.menu("setIcon", {
					target : item.target,
					iconCls : "icon-empty"
				});
			} else {
				$("#tt").datagrid("showColumn", item.text);
				tmenu.menu("setIcon", {
					target : item.target,
					iconCls : "icon-ok"
				});
			}
		}
	});
}