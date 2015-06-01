var products = [ {
	productid : '0',
	name : '男'
}, {
	productid : '1',
	name : '女'
}];
function productFormatter(value) {
	for ( var i = 0; i < products.length; i++) {
		if (products[i].productid == value)
			return products[i].name;
	}
	return value;
}
$(function() {
	$("#companyBox").tabs({
		fit : true,
		tools : '#tab-tools'
	});
	var lastIndex;
	$('#tt').datagrid({
		toolbar : [ {
			text : '添加人员',
			iconCls : 'icon-add',
			handler : function() {
				$('#tt').datagrid('endEdit', lastIndex);
				$('#tt').datagrid('appendRow', {
					itemid : '',
					productid : '',
					listprice : '',
					unitprice : '',
					attr1 : '',
					status : 'P'
				});
				lastIndex = $('#tt').datagrid('getRows').length - 1;
				$('#tt').datagrid('selectRow', lastIndex);
				$('#tt').datagrid('beginEdit', lastIndex);
			}
		}, '-', {
			text : '删除人员',
			iconCls : 'icon-remove',
			handler : function() {
				var row = $('#tt').datagrid('getSelected');
				if (row) {
					var index = $('#tt').datagrid('getRowIndex', row);
					$('#tt').datagrid('deleteRow', index);
				}
			}
		}],
		onBeforeLoad : function() {
			$(this).datagrid('rejectChanges');
		},
		onClickRow : function(rowIndex) {
			if (lastIndex != rowIndex) {
				$('#tt').datagrid('endEdit', lastIndex);
				$('#tt').datagrid('beginEdit', rowIndex);
			}
			lastIndex = rowIndex;
		}
	});
});