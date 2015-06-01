<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="stylesheet" type="text/css" href="<%=basePath%>assets/css/login.css"/>
<jsp:include page="../header.jsp"></jsp:include>
<script type="text/javascript" src="<%=basePath%>assets/js/login.js"></script>

<title>登录</title>
</head>

<body>
<div class="login-top">
	<div class="welcome">欢迎使用重庆市消防设施监测评价管理系统</div>
    <div class="back">
    	<a href="#">使用指南</a>
    </div>
</div>
<div class="login-center">
    <div class="login-area">
        <div class="login-form">
        	<form id="loginForm" method="post">
            	<div class="login-tip">用户登录  UserLogin</div>
                <div><input type="text" class="username" name="username"></div>
                <div><input type="password" class="pwd" name="userpass"></div>
                <div class="btn-area">
						<input type="button" value="登　录" class="sub-btn" id="submitLogin">
						<input type="text" name="verify" class="verify" maxlength="4">
						<img id="code_img" style="cursor: pointer;" class="verify-img" title="点击刷新" src="<%=basePath%>validateCode/recode" src1="<%=basePath%>validateCode/recode" onclick="changeCode()">
						<a href="javascript:void(0)" style="font-size: 26px;margin-left: 318px;" onclick="complain()">投诉</a>
				</div>
            </form>
        </div>
    </div>
</div>
<div class="login-bottom">版权信息 2015-2020</div>
<div id="dd" style="width:800px;display:none;">
    <form id="opinionForm" method="post" enctype="multipart/form-data">
	<table style="border-collapse:separate;border-spacing:10px;">
		<tr>
			<td>建筑名称：</td>
			<td>
				<input type="text" id="projectName" name="projectName"
					onfocus="findProject()" readonly="readonly"/>
				<span id="checkProject" style="color: red;"></span>
				<input type="hidden" id="projectId" name="pid"/>
			</td>
		</tr>
		<tr>
			<td>投诉内容：</td>
			<td>
				<textarea cols="60" id="yjxx" name="yjxx"></textarea>
				<span id="checkContent" style="color: red;"></span>
			</td>
		</tr>
		<tr>
			<td>附件：</td>
			<td>
				<input class="easyui-filebox" type="file" name="yjfj"/>
			</td>
		</tr>
		<tr>
			<td></td>
			<td style="padding-left: 430px;" >
				<a href="javascript:void(0)" onclick="submitOpinion()" class="easyui-linkbutton">提&nbsp;&nbsp;交</a>
			</td>
		</tr>
	</table>
	</form>
	</div>
	
	<div id="project" data-options="iconCls:'icon-save'" style="width:600px;height:300px;display:none;">
		   <div id="tb" style="padding:5px;height:auto;">    
	       <div style="margin-bottom:5px">
	                                区域<input type="text" id="qy">
	                                建筑名称<input type="text" id="jzmc">
	           <a href="javascript:void(0)" onclick="queryProject()" class="easyui-linkbutton">查询</a>
	           <a href="javascript:void(0)" onclick="selectProject()" class="easyui-linkbutton">确定</a>    
	       </div>
	    </div>
		<table id="projectList">
		</table>
	</div>
</body>
</html>
<<script type="text/javascript">
function changeCode() {
	$("#code_img").attr("src",($("#code_img").attr("src1") + "?code=" + Math.random())) ;
}
</script>
