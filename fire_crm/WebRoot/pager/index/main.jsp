<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE html>
<html>
<head>
<title>重庆市消防设施监测评价管理系统</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<jsp:include page="../header.jsp"></jsp:include>
<link type="text/css" rel="stylesheet" href="assets/css/leftmenu.css" />
<script type="text/javascript" src="assets/js/main.js"></script>
<style type="text/css">
ul li a {
	list-style-type: none;
	height: 26px; /*设置高度为28px*/
	line-height: 26px; /*设置行距为28px，让文字在每行的中间位置*/
	background: #B3DFDA;
	color: #FFF; /*文字颜色是白色*/
	margin: 2px;
	font-size: 12px; /*用12号字*/
	display: block;
	/*这个比较关键，因为a本身就是联级元素，本身不具有宽高，用这个把它变成块级元素，这样前面设置的宽和高就能起作用了*/
	text-align: center; /*让文本居中*/
	text-decoration: none; /*去掉下划线*/
}
.banner-left{ float:left; height:100%; width:auto;color:#ffffff; margin-left:5px;}
.banner-left span{display:block; font-size:14px;}
.banner-left span:first-child{ line-height:40px;line-height:40px; font-size:24px;margin-top:6px;}
</style>
</head>

<body class="easyui-layout">
	<div data-options="region:'north',border:false"
		style="height:81px;background:url(assets/images/banner/top-bg.jpg);">
        <div class="banner-right">
        	<div class="right-ctx-box">
            	<div class="update-inf"> 　 　修改资料</div>
                <div class="update-pass">  　　修改密码</div>
                <div class="logout" id="logout">　  　退出系统</div>
            </div>
        </div>
        <div class="nowtime">当前时间：loading...</div>
		</div>
	<div data-options="region:'west',split:'true',title:'功能菜单'" style="width:211px;border:none;">
		<div id="menu" class="easyui-accordion">
			<c:forEach var="menu" items="${sysmenus}">
				<div title="${menu.menuName}">
				<ul style="list-style-type:none;padding:0;">
				    <c:forEach var="submenu" items="${menu.children}">
				    	<li class="js-son-li">
	                    	<a href="javascript:void(0)" onclick="jumpto('${submenu.menuName}','<%=basePath%>${submenu.url}',this)">${submenu.menuName}</a>
	                    </li>
				    </c:forEach>
				</ul>
			</div>
			</c:forEach>
		</div>
	</div>
	<div data-options="region:'south',border:false"
		style="height:35px;line-height:30px;text-align: center;">
		版权：重庆消防总队| 建议使用 IE8.0的浏览器</div>
	<div data-options="region:'center'" style="overflow: hidden;">
		<div id="tabs">
			<div title="待办事宜" style="padding: 0 10px;display: block; margin-top:10px;">
				<table class="easyui-datagrid" style="width:1120px;height:250px"
					data-options="singleSelect:true,method:'get',rownumbers:true" toolbar="#tb">
				<thead>
					<tr>
						<th data-options="field:'itemid',align:'center',width:120">任务编号</th>
						<th data-options="field:'productid',align:'center',width:120">任务类型</th>
						<th data-options="field:'listprice',align:'center',width:220">任务</th>
						<th data-options="field:'unitcost1',align:'center',width:220">任务说明</th>
						
						<th data-options="field:'unitcost2',align:'center',width:120">目标日期</th>
						<th data-options="field:'unitcost3',align:'center',width:120">任务来源</th>
						<th data-options="field:'attr1',align:'center',width:120">创建时间</th>
					</tr>
				</thead>
			</table>
			    <div id="tb" style="padding:5px;height:auto;">    
		        <div style="margin-bottom:5px">
			                                类型<input type="radio" name="planType" checked="checked">消防企业从业信息填报
			           <input type="radio" name="planType">工程信息填报
			           <input type="radio" name="planType">消防企业从业信息变更填报
			           <input type="radio" name="planType">不良行为信息填报
			                                名称<input type="text" name="planType">
		            <a href="javascript:void(0)" id="addProject" class="easyui-linkbutton" iconCls="icon-search">查询</a>    
		        </div>    
		    </div>
			</div>
		</div>
	</div>
</body>
</html>